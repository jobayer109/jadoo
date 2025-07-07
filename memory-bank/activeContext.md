# Active Context: Jadoo Travel Website

## Current Work Focus

The current focus is on implementing the Jadoo Travel Website based on the detailed plan provided by the user. Tailwind CSS setup has been confirmed.

## Recent Changes

- Created `memory-bank/projectbrief.md` outlining the core requirements and goals.
- Created `memory-bank/productContext.md` detailing the purpose, functionality, and user experience goals.
- Updated `memory-bank/systemPatterns.md` to reflect `.jsx` extensions and Tailwind CSS.
- Updated `memory-bank/techContext.md` to reflect Vite as the build tool and Tailwind CSS dependencies.
- Updated `memory-bank/progress.md` with the detailed task list provided by the user.
- User confirmed Tailwind CSS setup is complete.

## Next Steps

Proceed with the implementation of the tasks as outlined in `progress.md`, starting with cleaning up default Vite files and then creating reusable base components.

## Active Decisions and Considerations

- The project is a Vite React project, utilizing its structure and build process.
- Tailwind CSS is configured and ready for use.
- Static assets (images, icons) will be placed in `vite-project/src/assets`.
- Data for sections like "Top Destinations" and "Services" will be managed in `vite-project/src/data`.
- Specific reusable components requested: `Button.jsx`, `Input.jsx`, `SectionTitle.jsx`, `NavLink.jsx`, `FooterColumn.js`. These will be created in `vite-project/src/components`.
- **Implementation Guidelines:**
    - Fully responsive (mobile, tablet, desktop).
    - Use semantic HTML.
    - Tailwind utility classes preferred.
    - Use dummy text/image where actual content is missing.
    - Avoid unnecessary complexity.
- Pixel-perfect design and responsiveness remain key priorities.
- Image optimization was skipped due to the lack of actual image assets.
