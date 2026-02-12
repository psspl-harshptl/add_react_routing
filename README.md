# Meeting Management App (React Routing Demo)

This project is a React-based application designed to demonstrate client-side routing using **React Router DOM**. It features a meeting management interface with capabilities to join, host, and view meetings, as well as participate in polls. The application utilizes a responsive layout with a sidebar navigation system.

## Features

-   **Client-Side Routing**: Seamless navigation between pages without full page reloads using React Router v6+.
-   **Meeting Management**:
    -   **Join a Meeting**: Interface to join existing meetings.
    -   **Host a Meeting**: Tools to start and manage new meetings.
    -   **My Meetings**: View a list or calendar of your scheduled meetings.
-   **Interactive Polls**: dedicated section for creating and participating in polls.
-   **Responsive Design**: Built with **React Bootstrap** for a layout that works on various screen sizes.
-   **Sidebar Navigation**: A collapsible sidebar (Offcanvas on smaller screens) for easy access to all application sections.

## Technologies Used

-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[React Router DOM](https://reactrouter.com/)**: For handling routing in web applications.
-   **[Bootstrap 5](https://getbootstrap.com/)** & **[React Bootstrap](https://react-bootstrap.github.io/)**: For styling and responsive layout components.

## Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v14 or higher recommended)
-   npm (usually comes with Node.js)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd add_react_routing
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Usage

1.  Start the development server:
    ```bash
    npm start
    ```

2.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

3.  Explore the application:
    -   Use the sidebar to navigate between **Join Meeting**, **Host Meeting**, **My Meetings**, and **Poll**.
    -   Resize the window to see the responsive sidebar behavior.

## Project Structure

Here's a brief overview of the project's structure:

```
src/
├── assets/         # Static assets like images and styles
├── common/         # Reusable common components
├── helper/         # Helper functions and icons
├── layouts/        # Layout components (Content, Header, Sidemenu)
├── pages/          # Page components (Home, JoinMeeting, HostMeeting, etc.)
├── App.js          # Main application component with Route definitions
└── index.js        # Entry point of the application
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.
