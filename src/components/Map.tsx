import React, { useState, useEffect, useRef } from 'react';
import { locations } from '../data/locations';
import { findPathWithDirections, calculateTravelTime } from '../utils/pathfinder';
import { RouteDetails, TravelTimes } from '../types';

const PADDING = 50; // Padding in pixels

// Helper function to transform coordinates
const transformCoordinates = (x: number, y: number) => ({
  x: x + 50,
  y: y + 50
});

// Helper function to calculate walker rotation
const getWalkerRotation = (segment?: any) => {
  if (!segment) return 0;
  
  const start = transformCoordinates(segment.from.coordinates.x, segment.from.coordinates.y);
  const end = transformCoordinates(segment.to.coordinates.x, segment.to.coordinates.y);
  
  // Calculate angle in degrees
  const angle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
  
  // Adjust angle for walker facing direction
  return angle - 90;
};

export default function Map() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [routeDetails, setRouteDetails] = useState<RouteDetails | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [travelTimes, setTravelTimes] = useState<TravelTimes | null>(null);
  const [walkerPosition, setWalkerPosition] = useState({ x: 0, y: 0 });
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Function to scroll to a point smoothly
  const scrollToPoint = (x: number, y: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    container.scrollTo({
      left: Math.max(0, x - containerRect.width / 2),
      top: Math.max(0, 1500 - y - containerRect.height / 2),
      behavior: 'smooth'
    });
  };

  // Animation cleanup
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Update scroll position when walker moves
  useEffect(() => {
    if (isAnimating && walkerPosition.x && walkerPosition.y) {
      scrollToPoint(walkerPosition.x, walkerPosition.y);
    }
  }, [isAnimating, walkerPosition]);

  // Handle dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handler);
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);

  // Animation logic
  useEffect(() => {
    if (!routeDetails || !isAnimating) return;

    const segment = routeDetails.segments[currentSegment];
    if (!segment) {
      setIsAnimating(false);
      setCurrentSegment(0);
      return;
    }

    const startPos = transformCoordinates(segment.from.coordinates.x, segment.from.coordinates.y);
    const endPos = transformCoordinates(segment.to.coordinates.x, segment.to.coordinates.y);
    
    // Animation duration based on distance
    const duration = segment.connection.distance * 15; // Slower animation for better visibility
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate current position using linear interpolation
      const x = startPos.x + (endPos.x - startPos.x) * progress;
      const y = startPos.y + (endPos.y - startPos.y) * progress;
      
      setWalkerPosition({ x, y });
      
      // Scroll to keep walker in view
      if (progress < 0.95) {
        scrollToPoint(x, y);
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Add a small delay before moving to next segment
        setTimeout(() => {
          if (currentSegment < routeDetails.segments.length - 1) {
            setCurrentSegment(prev => prev + 1);
          } else {
            setIsAnimating(false);
            setCurrentSegment(0);
          }
        }, 100);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [routeDetails, currentSegment, isAnimating]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!start || !end) return;

    // Reset state before starting new path
    setIsAnimating(false);
    setCurrentSegment(0);
    setWalkerPosition({ x: 0, y: 0 });

    const details = findPathWithDirections(start, end);
    if (details.segments.length > 0) {
      setRouteDetails(details);
      // Set initial position to start point
      setWalkerPosition(transformCoordinates(details.segments[0].from.coordinates.x, details.segments[0].from.coordinates.y));
      setIsAnimating(true);
    }
  };

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'dark' : ''}`}>
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="flex-1 p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            >
              <option value="">Select start point</option>
              {locations.filter(loc => !loc.isHidden).map(loc => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>

            <select
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="flex-1 p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            >
              <option value="">Select destination</option>
              {locations.filter(loc => !loc.isHidden).map(loc => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Find Path
            </button>
          </div>
        </form>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map Container */}
          <div className="lg:w-2/3">
            <div 
              className="relative border-2 rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700"
              style={{ 
                width: '800px', 
                height: '600px',
                overflow: 'hidden'
              }}
            >
              {/* Scrollable Map Area */}
              <div 
                ref={scrollContainerRef}
                className="absolute inset-0 overflow-auto scroll-smooth"
                style={{
                  width: '100%',
                  height: '100%',
                  scrollBehavior: 'smooth'
                }}
              >
                {/* Map Content Area */}
                <div 
                  className="relative"
                  style={{
                    width: '2000px',
                    height: '1500px',
                    position: 'relative',
                  }}
                >
                  {/* Path lines */}
                  {routeDetails && (
                    <svg 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ 
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {routeDetails.segments.map((segment, index) => {
                        const start = transformCoordinates(segment.from.coordinates.x, segment.from.coordinates.y);
                        const end = transformCoordinates(segment.to.coordinates.x, segment.to.coordinates.y);
                        
                        // Calculate midpoint for road name
                        const midX = (start.x + end.x) / 2;
                        const midY = (start.y + end.y) / 2;
                        
                        // Calculate angle for road name
                        const angle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
                        
                        return (
                          <g key={index}>
                            <line
                              x1={start.x}
                              y1={1500 - start.y} // Invert Y coordinate for SVG
                              x2={end.x}
                              y2={1500 - end.y}   // Invert Y coordinate for SVG
                              stroke={index <= currentSegment ? '#3B82F6' : '#D1D5DB'}
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                            {segment.connection.name && (
                              <text
                                x={midX}
                                y={1500 - midY}
                                textAnchor="middle"
                                transform={`rotate(${-angle}, ${midX}, ${1500 - midY})`}
                                className="text-xs fill-current dark:fill-gray-300"
                                style={{ fontSize: '10px' }}
                              >
                                {segment.connection.name}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  )}

                  {/* Map points */}
                  {locations.filter(loc => !loc.isHidden).map(loc => {
                    const { x, y } = transformCoordinates(loc.coordinates.x, loc.coordinates.y);
                    return (
                      <div
                        key={loc.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{
                          left: `${x}px`,
                          top: `${1500 - y}px` // Invert Y coordinate for positioning
                        }}
                        onClick={() => scrollToPoint(x, y)}
                      >
                        <div className="relative group">
                          <span className="text-2xl">{loc.icon}</span>
                          {/* Tooltip */}
                          <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 bg-black text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
                            <div className="font-medium">{loc.name}</div>
                            <div className="text-gray-300 text-xs">
                              ({loc.coordinates.x}, {loc.coordinates.y})
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Walker */}
                  {isAnimating && (
                    <div
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 text-2xl z-10"
                      style={{
                        left: `${walkerPosition.x}px`,
                        top: `${1500 - walkerPosition.y}px`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <div style={{ transform: `rotate(${getWalkerRotation(routeDetails?.segments[currentSegment])}deg)` }}>
                        🚶
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-4">
            {routeDetails && (
              <>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700">
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Directions:</h3>
                  <ol className="space-y-2">
                    {routeDetails.directions.map((direction, index) => (
                      <li
                        key={index}
                        className={`p-2 rounded ${
                          index === currentSegment
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : 'dark:text-gray-300'
                        }`}
                      >
                        {index + 1}. {direction}
                      </li>
                    ))}
                  </ol>
                </div>

                {travelTimes && (
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700">
                    <h3 className="text-lg font-semibold mb-2 dark:text-white">
                      Estimated Travel Times:
                    </h3>
                    <div className="space-y-2 dark:text-gray-300">
                      <p>🚶 Walking: {travelTimes.walking} minutes</p>
                      <p>🚲 Cycling: {travelTimes.cycling} minutes</p>
                      <p>🚗 Driving: {travelTimes.driving} minutes</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
