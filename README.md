# Table of Contents

- **[Getting Started](https://github.com/dsaw/weatherman-reactt#-getting-started)**

- **[Motivation](https://github.com/dsaw/weatherman-react#-motivation)**

- **[Challenges](https://github.com/dsaw/weatherman-react#-challenges)**

- **[Contribution](https://github.com/dsaw/weatherman-react#-contribution)**

- **[License](https://github.com/dsaw/weatherman-react#-license)**

- **[Contact](https://github.com/dsaw/weatherman-react#-contact)**

- **[Acknowledgements](https://github.com/dsaw/weatherman-react#-acknowledgements)**


# Getting Started

## Basic Setup

- Clone the repository & use the `master` branch

```bash

git clone https://github.com/dsaw/weatherman-react.git

```

- Install the packages using the command `npm install`


# Challenges
- All free API services don't have hourly forecasts & Dark Sky API has closed down.

- For search, Algolia API has been used which fetches list of latitudes & longitude. The actual data comes from MetaWeather currently, which returns locations based on woeids so another API call has to be made to search the possible list of locations closest to the location parameters. This can be inaccurate with results fetched from neigbouring countries too.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Contact
