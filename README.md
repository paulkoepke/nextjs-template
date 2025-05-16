# Next Template

This is a Next.js TypeScript starter template with a well-rounded set of dependencies for development, testing, linting, form handling, and internationalization.

---

## Key Dependencies

### Core

- **next** (v15.3.0) — React framework for server-side rendering and static site generation
- **react** & **react-dom** (v19) — React UI library

### State Management & Data Fetching

- **@tanstack/react-query** — Powerful data fetching and caching library for React

### Forms & Validation

- **react-hook-form** — Performant and easy-to-use form state management
- **@hookform/resolvers** — Integrate validation schemas with react-hook-form
- **zod** — TypeScript-first schema validation and parsing

### Date Handling

- **dayjs** — Lightweight date utility library

### Internationalization (i18n)

- **i18next** — Framework for internationalization
- **react-i18next** — React bindings for i18next

### Query String Parsing

- **qs** — Query string parsing and stringifying

---

## Development & Tooling

### Linting

- **eslint** & **eslint-config-next** — Linting with Next.js defaults
- **eslint-plugin-boundaries** — Enforce architectural boundaries between modules
- **eslint-plugin-no-only-tests** — Prevent committed `.only` tests in Jest/Mocha
- **eslint-plugin-cypress** — Cypress-specific linting rules
- **eslint-plugin-jest-dom** — Lint rules for jest-dom matchers
- **eslint-plugin-testing-library** — Lint rules for Testing Library usage
- **eslint-config-prettier** — Disables ESLint rules that conflict with Prettier

### Testing

- **jest** — JavaScript testing framework
- **jest-environment-jsdom** — JSDOM environment for Jest
- **@testing-library/react** & **@testing-library/dom** — Testing utilities for React components and DOM
- **@testing-library/jest-dom** — Custom Jest matchers for the DOM
- **cypress** — End-to-end testing framework

### TypeScript

- **typescript**
- **ts-node** — Run TypeScript files directly
- **typescript-eslint** — ESLint parser and plugin for TypeScript
- Type definitions for Jest, Node, React, React DOM, and qs

### Code Formatting

- **prettier** — Opinionated code formatter

---

## Scripts

- `dev` — Runs Next.js in development mode with Turbopack
- `build` — Builds the production version
- `start` — Starts the production server
- `lint` — Runs ESLint checks
- `test` — Runs Jest tests
- `cypress:open` — Opens Cypress test runner
- `prepare:husky` — Automatically enables git hooks

---

## EsLint defined Boundaries

```txt
src/
├── app/               # Application Layer (z.B. Seiten, Routing)
├── features/          # Feature-spezifische Komponenten & Logik
│   ├── login/
│   │   ├── ui/
│   │   ├── model/
│   │   └── api/
│   └── profile/
├── entities/          # Kern-Domänen-Modelle (z.B. User, Product)
│   ├── user/
│   └── product/
├── shared/            # Wiederverwendbare Komponenten, Utils, Hooks
│   ├── ui/
│   ├── lib/
│   ├── hooks/
│   └── config/
└── pages/             # Next.js Seiten (könnte auch in app/ sein)
```

- **`app`** is allowed to access **`features`**, **`entities`**, and **`shared`**  
  (e.g., pages use features)

- **`features`** are allowed to access **`entities`** and **`shared`**,  
  but **not** **`app`** or other **`features`** directly (isolation)

- **`entities`** can access **`shared`** (e.g., utils, libraries)

- **`shared`** is universal and can reference itself

---

## Templates

in the directory /templates are located templates for the following cases:

- Github CI
- Dockerfile

---

## (Optional) Deploy with Docker

This guide shows you how to build and run your Next.js application inside a Docker container.

---

### 1. Create a Dockerfile

In the root of your Next.js project, create a file named `Dockerfile` with the content from the /templates folder

### 2. Build the Docker image

Run this command in your project directory:

```shell
docker build -t nextjs-app .
```

### 3. Run the container

```shell
docker run -p 3000:3000 nextjs-app
```

### 4. (Optional) Use Docker Compose

Create a docker-compose.yml file from the template and start it with:

```shell
docker compose up
```
