# Frontend Take Home Exercise

This is a frontend take home exercise.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
#npm
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Project info

This project is based on Vue.js 3 and Nuxt 3. With server-sider rendering, the pages can render faster and improve SEO.

`./composables` stores the objects and helper methods.
`./compoents` stores all the modular Vue components.
`./pages` stores all pages for this project (currently only index.vue).
`./assets` stores the css style file and static images.

The CSS Style utilizes the tailwind css framwork, and supports the dark mode. You can check out the page under dark mode by enabling dark mode on your computer or wait until night.

If you have difficulties locating the problem, please check out https://support.google.com/chrome/answer/9275525 .
