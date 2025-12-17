# New York Times Clone

This project is a React-based front-end application that replicates the layout and feel of the New York Times website. It dynamically fetches and displays articles using the official New York Times API.

## Features

-   **Dynamic Content**: Fetches real-time article data from various New York Times API endpoints.
-   **Categorized Sections**: Displays articles from different categories, including:
    -   Movie-related articles
    -   Election news
    -   Most Emailed articles (over 7 and 30 days)
-   **Responsive Design**: The layout adjusts for desktop, tablet, and mobile screen sizes, ensuring a consistent user experience across devices.
-   **Component-Based Architecture**: Built with reusable React components for a modular and maintainable codebase.

## Tech Stack

-   **React**: A JavaScript library for building user interfaces.
-   **JavaScript (ES6+)**: For application logic and API interaction.
-   **CSS3**: For custom styling and responsive layout using Grid and Flexbox.
-   **New York Times API**: Used to source article content, images, and metadata.

## Project Structure

The application is structured into several key components:

-   `App.jsx`: The main component that assembles the overall page layout.
-   `components/Navbar.jsx`: The top navigation bar, which includes the site logo, date, and menu links.
-   `components/Main.jsx`: The primary content area, which aggregates various article sections.
-   `components/Aside-right.jsx`: The right-hand sidebar content.
-   `components/Footer.jsx`: The site footer with navigation links and copyright information.
-   **Article Components** (`Movie.jsx`, `Election.jsx`, `Emailed7.jsx`, `Emailed30.jsx`): Individual components responsible for fetching and rendering articles from specific API endpoints.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v14 or later)
-   npm or yarn
-   A New York Times API Key. You can obtain one from the [NYT Developer Portal](https://developer.nytimes.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/nico25m/newyorktimes.git
    cd newyorktimes
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Configure API Key:**
    The project uses a hardcoded API key for demonstration purposes. It is recommended to replace it with your own. Update the API key in the `fetch` calls within the following files:
    -   `src/components/Election.jsx`
    -   `src/components/Movie.jsx`
    -   `src/components/Emailed7.jsx`
    -   `src/components/Emailed30.jsx`

    *Example (`src/components/Movie.jsx`):*
    ```javascript
    // Before
    const response = await fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
    );

    // After
    const response = await fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&api-key=YOUR_API_KEY_HERE"
    );
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make edits.

### `npm test`

Launches the test runner in interactive watch mode. This project uses React Testing Library for component testing.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

This command removes the single build dependency from your project and copies all configuration files (webpack, Babel, ESLint, etc.) directly into your project, giving you full control over them.