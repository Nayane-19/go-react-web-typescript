# WEB REACT APPLICATION

This is a React application built using Vite, leveraging TypeScript for static type checking, React 19 for building user interfaces, React Router DOM for routing, Lucide React for icons, and Sonner for notifications.

## **Table of Contents**

- [Getting Started](#getting-started)
- [Features](#features)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## **Getting Started**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [pnpm](https://pnpm.io/) (>= 6.x)

### **Installation**

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-vite-react-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my-vite-react-app
   ```
3. Install the dependencies:
   ```sh
   npm install -g pnpm
   ```

### **Running the Application**

To start the development server, use:

```sh
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## **Features**

- **Fast Development**: Vite provides a fast development environment with lightning-fast HMR (Hot Module Replacement).
- **TypeScript Support**: Static type checking with TypeScript ensures type safety and developer confidence.
- **Routing**: Seamlessly navigate between different views using React Router DOM.
- **Icon Library**: Beautiful and consistent icons from Lucide React.
- **Notifications**: Display elegant notifications using Sonner.

## **Project Structure**

The project's structure is organized as follows:

```bash
my-vite-react-app/
├── public/                     # Static assets
├── src/                        # Source files
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/             # Reusable components
│   ├── pages/                  # Page components
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── .eslintrc.cjs               # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Project metadata and scripts
```

## **Available Scripts**

In the project directory, you can run:

- **`pnpm dev`**: Starts the development server.
- **`pnpm build`**: Bundles the app for production.
- **`pnpm preview`**: Previews the production build.
- **`pnpm lint`**: Lints the source code using ESLint.
- **`pnpm format`**: Formats the source code using Prettier.

## **Technologies Used**

- **Vite**: Next Generation Frontend Tooling.
- **React 19**: A JavaScript library for building user interfaces.
- **TypeScript**: JavaScript with static type definitions.
- **React Router DOM**: Declarative routing for React.
- **Lucide React**: A collection of beautifully simple, open-source icons.
- **Sonner**: A lightweight notification library for React.
