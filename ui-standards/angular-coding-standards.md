# Angular Coding Standards

## General Guidelines
- Use **TypeScript** for all Angular development.
- Follow the **Angular Style Guide** by the Angular team.
- Use **strict mode** in `tsconfig.json` for better type safety.
- Don't use jQuery
- Don't continue if standards are violated.

## Project Structure
- Organize files by **feature modules**.
- Use consistent naming conventions:
    - Components: `component-name.component.ts`
    - Services: `service-name.service.ts`
    - Modules: `module-name.module.ts`

## Components
- Use **OnPush Change Detection** for better performance.
- Keep components small and focused on a single responsibility.
- Use **Input** and **Output** decorators for parent-child communication.

## Services
- Use **Dependency Injection** for services.
- Keep services stateless whenever possible.
- Use RxJS for handling asynchronous operations.

## Templates
- Use **Angular Directives** (`*ngIf`, `*ngFor`) for dynamic rendering.
- Avoid complex logic in templates; move it to the component class.
- Use **trackBy** with `*ngFor` for better performance.

## Styling
- Use **SCSS** for component styles.
- Scope styles to components using Angular's **ViewEncapsulation**.
- Follow a consistent naming convention for CSS classes.

## Testing
- Write **unit tests** for components, services, and pipes.
- Use **Karma** and **Jasmine** for testing.
- Aim for high code coverage (80% or above).

## Best Practices
- Use **async/await** for asynchronous code.
- Avoid using `any` type; prefer strict typing.
- Use **environment files** for configuration.
- Avoid hardcoding values; use constants or configuration files.

## Linting and Formatting
- Use **ESLint** for linting.
- Follow a consistent code style using **Prettier**.
- Run linting and formatting checks before committing code.

## Version Control
- Commit small, meaningful changes.
- Use descriptive commit messages.
- Follow a **branching strategy** (e.g., Git Flow).

## Documentation
- Add comments for complex logic.
- Use **JSDoc** for documenting functions and classes.
- Maintain an updated `README.md` for the project.