
# Angular Unit Testing Standards

## 1. Test Structure

- Use Jasmine for writing unit tests.
- Organize tests in `*.spec.ts` files, colocated with the component/service/module.
- Use `describe` blocks to group related tests.
- Use `it` blocks for individual test cases.

## 2. Test Coverage

- Achieve at least 80% code coverage for all new code.
- Cover all public methods and properties.
- Write tests for both positive and negative scenarios.

## 3. Test Naming

- Use descriptive names for `describe` and `it` blocks.
- Follow the pattern: `should <do something> when <condition>`.

## 4. Test Isolation

- Use Angular's `TestBed` for configuring testing modules.
- Mock dependencies using Jasmine spies or Angular testing utilities.
- Avoid reliance on external services or APIs.

## 5. Best Practices

- Use `async` and `fakeAsync` for asynchronous code.
- Clean up after each test using `afterEach`.
- Avoid using `fit` and `fdescribe` in committed code.
- Prefer `const` and `let` over `var`.

## 6. Example

```typescript
describe('MyComponent', () => {
    let component: MyComponent;
    let fixture: ComponentFixture<MyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MyComponent ],
            providers: [ /* mocks */ ]
        }).compileComponents();

        fixture = TestBed.createComponent(MyComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
```

## 7. Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)



# Angular E2E Testing Standards

## 8. E2E Test Structure

- Use Cypress for end-to-end (E2E) testing.
- Organize E2E tests in the `cypress/e2e/` directory.
- Name test files with `.cy.ts` suffix.
- Group related tests using `describe` blocks.
- Use `it` blocks for individual test scenarios.

## 9. Test Coverage

- Cover critical user flows and edge cases.
- Ensure tests cover navigation, form interactions, and error handling.
- Maintain E2E coverage for all major features.

## 10. Test Naming

- Use descriptive names for `describe` and `it` blocks.
- Follow the pattern: `should <do something> when <condition>`.

## 11. Test Isolation

- Reset application state before each test using `beforeEach`.
- Avoid dependencies between tests.
- Use Cypress commands to stub network requests where appropriate.

## 12. Best Practices

- Prefer data-test attributes for selecting elements.
- Avoid using CSS classes or IDs for selectors.
- Use custom Cypress commands for repeated actions.
- Clean up side effects after each test.
- Avoid hardcoded waits; use Cypress's built-in waiting mechanisms.

## 13. Example

```typescript
describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should log in successfully with valid credentials', () => {
        cy.get('[data-test=username]').type('testuser');
        cy.get('[data-test=password]').type('password123');
        cy.get('[data-test=login-button]').click();
        cy.url().should('include', '/dashboard');
    });

    it('should display error with invalid credentials', () => {
        cy.get('[data-test=username]').type('wronguser');
        cy.get('[data-test=password]').type('wrongpass');
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=error-message]').should('be.visible');
    });
});
```

## 14. Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Angular E2E Testing](https://angular.io/guide/testing#end-to-end-testing-e2e)
