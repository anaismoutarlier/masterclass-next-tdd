## Nextjs Unit and E2E Testing

This is a basic Nextjs application bootstrapped with [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme). It shows how to configure Jest to work with Next for unit testing and how to set up Cypress for end-to-end testing.

### Unit testing with Jest

To run unit tests, execute the following command from the terminal:

```bash
yarn test:unit
```

_SETTING UP JEST IN A NEW PROJECT_

1. Install Jest.

```bash
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/dom
# or
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/dom
```

2. Copy the `jest.config.mjs` and `jest.setup.js` files from this project into the new project.

3. Create your test files.

**Note:** Test files can be co-located alongside production files (example: `src/components/Button/Button.test.js`) or in a dedicated `__tests__` folder (example: `src/__tests__`).

### E2E Testing with Cypress

To run E2E tests, execute the following command from the terminal:

```bash
yarn test:e2e
```

_SETTING UP CYPRESS IN A NEW PROJECT_

1. Install cypress.

```bash
yarn add cypress
# or
npm install cypress
```

2. Open two terminal windows.

3. In one window, launch the project:

```bash
yarn dev
```

4. In the second window, launch the tests:

```bash
yarn test:e2e
```

5. In the Cypress DevTools window, select E2E Testing.

6. In the Cypress DevTools window, select a browser to use for testing.

7. In the automated test window, select _New spec_ or create a new file in the `cypress/e2e` folder.

8. Write tests.

9. Run tests from automated test DevTools window.
