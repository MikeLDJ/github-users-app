# Github Users App

Demo application displaying GitHub users.

## About

### Technology

- React
- Redux
- Redux-Thunk
- Styled Components
- UI Library
- GitHub API as data source
- Axios
- Pagination with react-router
- Typescript
- Unit tests, coverage > 80%
- Eslint
- Netlify

### Views

#### Home page

- App shows a list of GitHub users
- User should have:
  - an avatar,
  - username,
  - link to profile in app
- App have a spinner

#### User details page

- View shows information about the chosen user:
  - GitHub username
  - Name
  - Avatar
  - Link do their profile on GitHub
  - They public repositories
- A back button, which, when clicked, redirects the user to the home page.
- It works after refreshing the page.

### Tips

- If exhaust the limit of available API calls, it can be increased by using a __GitHub personal access token__. For detailed instruction, see the __Rate limiting__ chapter of GitHub API documentation.

## Getting started

```bash
# Install dependencies
yarn

# Start the server in development mode
yarn start

# Build for production
yarn build
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.
