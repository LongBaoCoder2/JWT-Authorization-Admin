# JWT-Authorization-Admin



## Client

Simple client with ReactJs.

### Directory Layout
```bash
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
```

### Prerequisites

- [Node.js][nodejs] v10.15 or higher
- [Yarn][yarn] v1.17 or higher &nbsp;




---
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
