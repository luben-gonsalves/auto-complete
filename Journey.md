# My step by step journey in building this project

# Configuring the project

1.  Intialised my application with ` npm init` which generated package.json file. This is for managing all our package.
2.  Intialized as git repository by `git init` and added `.gitignore` file.
3.  Installed parcel as dev dependencies `npm i parcel -D`
4.  Installed React and React dom `npm i react reactdom`
5.  Typescript is supported out of the box by parcel, so just just generated tsconfig file by  
    `npx tsc --init`
    also added TypeScript definitions for React and ReactDOM by
    `npm add @types/react @types/react-dom -D`
6.  Created `index.html` file as my entry point in the application and `App.tsx` file. Configured the package.json with `start` and `build` command.
    `      {
    "start": "parcel index.html",
    "build": "parcel build index.html",
}`

```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Doctorly UI Task</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="./App.tsx"></script>
    </body>
  </html>
```

```
    import React from "react";
    import ReactDOM from "react-dom/client";

    type Props = {};

    function App({}: Props) {
    return <div>App</div>;
    }

    const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
    );

    root.render(<App />);
```

npm start failed because of import/export error had to add type="module" in the script Tag. Voila! and it works now!

```
    <script src="./App.tsx" type="module"></script>
```

7.  Installed Jest as testing library by following commands
    ```
    npm install -D @testing-library/react
    npm install -D @testing-library/jest-dom
    npm install -D jest
    npm install -D jest-environment-jsdom
    npx jest --init
    npm install -D babel-jest @babel/core @babel/preset-env
    npm install -D @babel/preset-typescript
    ```
8.  Configured `.babelrc` to Use babel for the transpilation. was necessary to make `jest` work as per the documentation.
    ```
      {
        "presets": [
          ["@babel/preset-env", { "targets": { "node": "current" } }],
          "@babel/preset-typescript"
        ]
      }
    ```
9.  To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude `@parcel/transformer-babel`, improves the performance.
    ```
    {
      "extends": "@parcel/config-default",
      "transformers": {
        "*.{js,mjs,jsx,cjs,ts,tsx}": [
          "@parcel/transformer-js",
          "@parcel/transformer-react-refresh-wrap"
        ]
      }
    }
    ```
10. That was alot just to make jest work! :D. Lets just configure the last bits i.e ` EsLint`` and  `Prettier```

11. Installing Eslint

    ```
    npm install eslint -D
    npm init @eslint/config

    ```

    this generated `.eslintrc` file

12. Installing Prettier
    `npm install -D --save-exact prettier `

    The `--save-exact` ensures that everyone will install the same version of prettier to avoid inconsistency

13. Integrating Prettier with ESLint

    `npm install --save-dev eslint-config-prettier`

    To prevent inconsistency with `prettier` added prettier in eslint config
    `"extends": ["plugin:react/recommended", "standard-with-typescript", "prettier"]`

14. Followed tailwind documentation and installed it to make my life easier :)

    and also installed `prettier-plugin-tailwindcss` for sorting the classes

# Building Autocomplete

## Some thought before starting to build the application?

Do we need to search only by name or by other fields?
Mobile responsive?

## High level architecture design

1. Inputbox for searching
2. Result UI for showing search result
3. Cache to store previous query result

### Data model

1.  Various props which needs to be exposed to the Inputbox

    Input props example

```
{
      placeholder?: string
      minQueryLength?: number
      maxResults?: number
      debounceDelayTime?: number
      apiTimeoutDuration?:number
      cacheSize?: number
      cacheExpiration?: number
      getResults?: Promise<Data[]>
      renderResults?: FunctionComponent
      onClear:()=>{}
      showCloseIcon =>{}
      }
```

2. Cache
   Use localstorage ? but no expiry feature probably need to add date with the search results.

# User Experience

Need to handle the Error states, keyboard experience, clear option, long string inputs/ results.

### Performance

Can be improved by debouncing, caching and using virtualized list if we are dealing very large lists.

### Accessibility

1. Screen Readers
   use aria atrributes wherever neccessary

2. Keyboard interactions
   Enter should perform search we get this by wrapping in form
   Up/down arrows to navigate the options
