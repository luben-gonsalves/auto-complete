# Doctorly UI Task Documentation

## Project Title

Doctorly UI Task

## Project Description

This project is a simple Dropdown UI developed using HTML, CSS, and JavaScript.

## How to Run the Project in your system

To run this project, please follow the steps below:

1. Clone the Git repository using the following command:

   ```
   git clone [link]
   ```

2. Navigate to the project directory using the following command:

   ```
   cd [project directory]
   ```

   Replace \`[project directory]\` with the name of the directory where the project is stored.

3. Install the dependencies using the following command:

   ```
   npm install
   ```

   This will install all the required dependencies for the project.

4. Start the project using the following command:

   ```
   npm start
   ```

   This will start the development server and the project will be available at \`http://localhost:3000/\`.

5. Open a web browser and navigate to \`http://localhost:3000/\` to view the project.

## Project Structure

The project has the following structure:

\`\`\`
doctorly-ui-task/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Dropdown.js
│ │ └── ...
│ ├── styles/
│ │ ├── Dropdown.css
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── ...
\`\`\`

The \`public\` directory contains the HTML file for the project.

The \`src\` directory contains the main source code for the project. The \`components\` directory contains the \`Dropdown\` component that renders the dropdown UI. The \`styles\` directory contains the CSS file for the \`Dropdown\` component. The \`App.js\` file is the entry point for the application and renders the \`Dropdown\` component. The \`index.js\` file is the entry point for the JavaScript code and initializes the React application.

The \`package.json\` file contains the metadata for the project and lists the required dependencies.

## Conclusion

This is a simple project that demonstrates the use of React to build a Dropdown UI. It can be further developed to include additional functionality or styled to suit specific requirements.`;

# My step by step journey in building this project

# Tools Used

1. Parcel - as bundler
2. React & typescript

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

15.
