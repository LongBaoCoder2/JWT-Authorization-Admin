# JWT-Authorization-Admin

<h2> Client </h2>
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.                     
├── src/                           # Application source code
│   ├── redux/                     # Config store redux and provider reducer
│   ├── service/                   # Server-side code (API, authentication, etc.) and get data
│   ├── components/                # Base React Component of Site
│   │   ├── HomePage/              # Home page link="/"
│   │   ├── Login/                 # Login page link="/login"
│   │   ├── Register/              # Register Page link="/register"
│   │   ├── Navbar/                # Navigation bar
│   │   ├── Notification/          # Notification Service
│   ├── index.js                   # Client-side entry point, e.g. ReactDOM.render(<App />, container)
│   ├── App.js                     # Application BrowserRouter
├── .env                           # Environment variables for local development
└── package.json                   # The list of project dependencies + NPM scripts
