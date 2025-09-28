# LC Energia Website

This is the official website for LC Energia, a modern web application built with Next.js, TypeScript, and Tailwind CSS. The site is designed to be performant, accessible, and maintainable.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4 with a custom theme
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Linting**: [ESLint](https://eslint.org/)

## Project Structure

The project follows a standard Next.js App Router structure:

- `src/app/`: Contains the page routes, layouts, and metadata.
- `src/components/`: Contains all reusable React components.
- `src/data/`: Holds static data used across the application (e.g., carousel content).
- `src/hooks/`: For custom React hooks.
- `public/`: For static assets like images and fonts.
- `tailwind.config.mjs`: The configuration file for the Tailwind CSS design system.

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm or your package manager of choice

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd lc-energia-modern
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page will auto-update as you edit the files.

## Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using ESLint to find and fix issues.

## Styling

This project uses **Tailwind CSS** for all styling. We have a centralized theme defined in `tailwind.config.mjs` which includes a custom color palette and font families. Please use theme variables (e.g., `bg-primary`, `text-secondary`) instead of hardcoded values to ensure design consistency.

Legacy stylesheets have been removed to improve performance and maintainability.

## Animations

We use `framer-motion` for animations. The animation system is documented in detail in `src/README.md`. Please refer to it for guidelines on creating and using animations.

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.