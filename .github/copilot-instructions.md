# Angular Testing Standards

## General Guidelines
- Ensure all tests are written in **TypeScript**.
- Follow the **Arrange-Act-Assert (AAA)** pattern for test structure.
- Aim for **high code coverage** (80% or above).
- Use **descriptive test names** to clearly indicate the purpose of the test.
- Avoid hardcoding values; use constants or mock data.
- Only framework sallowed to write test cases are Jasmine and Cypress.
- Use Jasmine for unit test and Cyress for component or E2E tests.
- Don't continue if standards are violated.

---

## Jasmine Testing Standards

### Unit Testing
- Use **Karma** as the test runner for Jasmine.
- Write unit tests for:
    - Components
    - Services
    - Pipes
    - Directives
- Mock dependencies using **Angular TestBed** or **Jasmine spies**.
- Use **fakeAsync** and **tick** for testing asynchronous code.
- Test component inputs and outputs using **EventEmitters**.
- Verify DOM changes using Angular's **DebugElement**.

### Best Practices
- Keep tests isolated and independent.
- Avoid testing implementation details; focus on behavior.
- Use **beforeEach** to set up common test configurations.
- Clean up after tests using **afterEach**.
- Use **Matchers** (e.g., `toEqual`, `toBeTruthy`) for assertions.

---

## Cypress Testing Standards

### End-to-End Testing
- Use Cypress for testing user flows and integration scenarios.
- Organize tests by **feature or module**.
- Use **data-test-id** attributes for selecting DOM elements.
- Mock API calls using **cy.intercept** to isolate tests from backend dependencies.
- Use **cy.fixture** for loading test data.

### Best Practices
- Write tests that are **resilient to UI changes**.
- Avoid hardcoding selectors; prefer semantic selectors.
- Use **cy.wait** sparingly; prefer assertions to wait for conditions.
- Take screenshots and videos for failed tests to aid debugging.
- Clean up test data after each test run.

---

## Common Testing Practices
- Use **mock services** to isolate unit tests from external dependencies.
- Test edge cases and error scenarios.
- Avoid flaky tests by ensuring deterministic behavior.
- Run tests in **CI/CD pipelines** to ensure code quality.
- Regularly update and maintain test cases as the application evolves.
