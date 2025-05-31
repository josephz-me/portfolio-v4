# Cursor Project Rules

## Project Structure

- Keep all components in the `components/` directory
- Pages should be in the `pages/` directory
- Styles should be in the `styles/` directory
- Public assets (images, fonts, icons) should be in the `public/` directory

## Naming Conventions

- Components: Use PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- Pages: Use kebab-case (e.g., `about-us.tsx`, `contact.tsx`)
- Functions: Use camelCase (e.g., `handleSubmit`, `fetchData`)
- Constants: Use UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_URL`)
- Variables: Use camelCase (e.g., `userData`, `isLoading`)

## Component Structure

Each component should follow this structure:

1. Required files:
   - `index.tsx` - Main component file
   - `styles.module.css` - Component-specific styles
2. Optional files:
   - `types.ts` - TypeScript interfaces/types
   - `utils.ts` - Helper functions

## Import Order

Follow this order for imports:

1. React imports
2. Next.js imports
3. External libraries
4. Components
5. Styles
6. Utils
7. Types

Separate import groups with a newline.

## Style Guidelines

- Use CSS Modules for component-specific styles
- Support both `.css` and `.scss` files
- Follow BEM naming convention for CSS classes
- Keep styles modular and scoped to components

## Code Quality

- Use TypeScript for type safety
- Write meaningful comments for complex logic
- Keep components focused and single-responsibility
- Use proper error handling
- Follow React best practices and hooks guidelines

## Git Practices

- Write clear commit messages
- Keep commits focused and atomic
- Follow conventional commits format
- Review code before committing

## Performance

- Optimize images and assets
- Use proper code splitting
- Implement lazy loading where appropriate
- Monitor and optimize bundle size
