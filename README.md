
# Sin Validation App

## Project Highlights

This is a React application built with TypeScript that validates a given number as a valid SIN value. The app allows users to input a number, and it displays whether it is a valid SIN value or not.


This project demonstrates a SIN validation app built using **React** and **TypeScript**. These technologies were chosen to highlight:

- **Modern development practices**: React’s component-based architecture ensures modularity and reusability.
- **Strong typing with TypeScript**: Improves maintainability and scalability by catching errors early and providing robust type definitions.

## Features

- Validates Canadian Social Insurance Numbers (SINs).
- Provides real-time validation feedback to users.

## Project Setup

### File Structure

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── SinInput.tsx
│   │   └── ValidationResult.tsx
│   ├── index.css
│   └── index.tsx
└── tsconfig.json
```

- **`public/`**: Contains the `index.html` file which is the entry point for the React app.
- **`src/`**: Contains the React components, TypeScript files, and styles for the app.
- **`package.json`**: The configuration file for managing dependencies and scripts.
- **`tsconfig.json`**: The configuration for TypeScript compilation.

---

## Prerequisites

Before starting the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: 18+)
- [npm](https://www.npmjs.com/) (npm is included with Node.js)

---

## Installation

### Without Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/siddarthgajjar/react-typescript-validator-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd react-typescript-validator-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

### With Docker

You can also run the app inside a Docker container for an isolated environment.

#### Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t react-typescript-validator-app .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:80 react-typescript-validator-app
   ```

   The app will now be available at `http://localhost:3000`.

---

## Running in Production

To build the app for production, you can run:

```bash
npm run build
```

This will generate a `build/` folder containing an optimized version of the app that can be deployed to any static file server.

### Docker Production Build

If you're using Docker for production:

1. The Docker image will automatically build the production version of the app using the command `npm run build`.
2. The app will be served via NGINX from the `build/` folder.

---
