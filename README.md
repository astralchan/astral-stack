<h1 align='center'>Astral Stack</h1>
<div align='center'>
  <img src='.img/logo.svg' />
</div>

## Frontend

To deploy the frontend, run:

```
$ cd client
$ docker-compose up -d client-prod
```

then go to `localhost`.

### Typescript

`tsx` is transpiled to `jsx` with `tsc` and configured in [`client/tsconfig.json`](client/tsconfig.json).

### Babel

`jsx` is transpiled to `js` with `@babel/preset-react` and configured in [`client/babel.config.json`](client/babel.config.json).

### React

Components and UI elements are built with React. `react-router-dom` is used to define routes in [`client/src/App.tsx`](client/src/App.tsx).

### Tailwind

Used inside of React components for utility and style. Configured in [`client/tailwind.config.ts`](client/tailwind.config.ts).

### Webpack

Bundler used to build everything into `dist` folder.

### DaisyUI

Component tailwind library for quick UI components.

## Backend (WIP)

To deplay the backend, run

```
$ cd api
$ docker-compose up -d api-prod
```

### Rust

The backend is currently using tokio and axum.
