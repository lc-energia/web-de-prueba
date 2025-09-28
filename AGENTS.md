## Interacting with the Project

When working on this project, please follow these guidelines to ensure consistency and quality.

### Code Style and Conventions

- **Styling**: All styling must be done using **Tailwind CSS**. Do not use inline styles or legacy stylesheets (e.g., Bootstrap).
- **Colors**: Use the theme colors defined in `tailwind.config.mjs` (`primary`, `secondary`, `dark`, etc.) instead of hardcoded hex values.
- **Icons**: Do not use icon fonts like Font Awesome. All icons must be implemented as inline **SVG components**.
- **Components**: Create reusable, single-purpose components. Avoid monolithic components that do too much.

### Best Practices

- **Accessibility**: Ensure all components are accessible. Use semantic HTML, ARIA attributes where necessary, and provide text alternatives for images.
- **Performance**: Use Next.js features like `<Image>` for image optimization and `<Link>` for client-side navigation.
- **Data Handling**: Avoid using `dangerouslySetInnerHTML`. Structure data in a way that allows for safe rendering. For example, instead of injecting HTML strings, pass structured data to components.

### Verification

- After making changes, run `npm run build` to ensure the project compiles without errors.
- If you modify frontend components, perform a visual verification to confirm the changes appear as expected.