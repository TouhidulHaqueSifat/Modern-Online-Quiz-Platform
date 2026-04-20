# CognitiveFlow — Online Quiz Platform

A modern quiz application built with React, TypeScript, Vite, React Router v7, Tailwind CSS, and Redux Toolkit.

The app includes a landing page, quiz discovery experience, category filtering, an interactive quiz player, and a polished authentication UI.

## Features

- Landing page with hero section, feature highlights, and call-to-action.
- Quiz catalog with category filters and responsive card layout.
- Interactive quiz player with question navigation, progress bar, and scoring.
- Modular React Router route configuration for public and auth sections.
- Redux Toolkit store setup for application state management.
- Custom reusable UI components built with Tailwind CSS.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router v7
- Redux Toolkit
- Tailwind CSS v4
- Axios
- Motion One
- Lucide React icons
- Zod / React Hook Form (validation-ready dependencies)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app.

### Build for production

```bash
npm run build
```

### Serve the production build

```bash
npm run start
```

### Type check

```bash
npm run typecheck
```

## Project Structure

- `app/` - main application source
  - `components/` - UI components, layout, quiz cards, and form elements
  - `pages/` - page routes, including home, quiz discovery, quiz player, and auth page
  - `routes/` - React Router route definitions for public and auth sections
  - `redux/` - Redux store, slices, and hooks
  - `services/` - HTTP service wrapper and API helpers
  - `styles/` - global CSS styles
  - `types/` - shared TypeScript types

## Notes

- Quiz data is currently seeded locally in the app pages.
- The application is ready for enhancements such as API-backed quiz content, authentication, and result tracking.
