# System Patterns: Jadoo Travel Website

## System Architecture
The website will follow a component-based architecture using React. Each major section of the website (Header, Hero, Services, etc.) will be developed as a distinct, reusable React component. This promotes modularity, maintainability, and scalability.

## Key Technical Decisions
- **Frontend Framework:** React.js for building the user interface.
- **Styling:** Tailwind CSS for utility-first styling. This will enable rapid UI development and ensure a consistent design system.
- **Responsiveness:** Flexbox and CSS Grid will be used for layout, along with media queries for adaptive design across different screen sizes.
- **Asset Management:** Images and other static assets will be stored in the `src/assets` directory and imported as needed.

## Design Patterns in Use
- **Component-Based Architecture:** Breaking down the UI into independent, reusable components.
- **Props for Data Flow:** Passing data from parent components to child components using props.
- **State Management:** Local component state for simple UI interactions. For more complex global state, React Context API or a small state management library (if needed later) could be considered.
- **Semantic HTML:** Using appropriate HTML5 tags for better accessibility and SEO.
- **Utility-First Styling:** Leveraging Tailwind CSS utility classes for efficient and consistent styling.

## Component Relationships
- **App.jsx:** The root component that orchestrates the layout and renders all major section components.
- **Sections:** Each major section (e.g., `HeroSection`, `ServicesSection`) will be a top-level component within the `src/sections` directory, using `.jsx` extension.
- **Components:** Smaller, reusable UI elements (e.g., `Button`, `Input`, `SectionTitle`, `NavLink`, `FooterColumn`, `Card`, `Icon`) will reside in the `src/components` directory, using `.jsx` extension.
- **Data:** Static data (e.g., destination details, service descriptions) will be managed in `src/data`.
- **Styles:** Global styles in `src/index.css` and Tailwind CSS utility classes for component-specific styling.
