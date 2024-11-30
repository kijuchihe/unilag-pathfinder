# UNILAG Pathfinder Application Requirements

## Project Overview
An interactive web application for navigating the University of Lagos campus, featuring pathfinding capabilities and animated route visualization.

## Technical Requirements

### Frontend
- Next.js 13+ (App Router)
- React 18+
- TypeScript
- Leaflet.js for map visualization
- Framer Motion for animations
- TailwindCSS for styling
- React Hook Form for form handling

### Core Features
1. Interactive Campus Map
   - Custom icons for different location types:
     * Hostels
     * Food joints
     * Course halls
     * Bus stops
     * Main gates
     * Sports center
     * Faculties
     * Departments

2. Location Data Structure
   - Coordinates (x, y)
   - Official name
   - Common name (student terminology)
   - Location type
   - Travel time estimates:
     * Walking
     * Cycling
     * Driving

3. Pathfinding Features
   - Implementation of Dijkstra's algorithm
   - Route calculation
   - Animated path visualization
   - Walking avatar animation
   - Multiple transportation modes

4. User Interface
   - Location selection form
   - Interactive map markers
   - Route display
   - Estimated travel time display
   - Responsive design

## Initial Location Set
1. Main gate
2. Education bus stop
3. Faculty of Education
4. Sports Center
5. New Hall
6. CITS
7. Faculty of Engineering
8. Mariere hostel

## Development Requirements
- Node.js 16+
- npm or yarn
- Git for version control
- Modern web browser with JavaScript enabled

## Additional Features
- Real-time location updates
- Alternative route suggestions
- Accessibility considerations
- Mobile responsiveness
- Performance optimization for smooth animations

## Performance Requirements
- Fast route calculation
- Smooth animations
- Responsive UI
- Efficient map rendering
- Quick location search
