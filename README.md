# JWT-Authorization-Admin

Simple project with Redux, JsonWebToken to Authorization Admin. \
Developing ...

## Client

Simple client with ReactJs to manager user with admin authorization.


<img
  src="https://i.ibb.co/DDL0ZyL/z4185139899398-7e1285e73ed8091a526772fb81dd76cf.jpg"
  alt="Alt text"
  title="Pic1"
  style="display: inline-block; margin: 10 auto; max-width: 200px">

<img
  src="https://i.ibb.co/qD25qxX/z4185139918698-61069b65bbcd51eb6dcac4f3fbaa9a9b.jpg"
  alt="Alt text"
  title="Pic2"
  style="display: inline-block; margin: 10 auto; max-width: 200px">

<img
  src="https://i.ibb.co/YTr3Z6X/z4185139993594-0a7eb4314f5db32f88f404929c2675d2.jpg"
  alt="Alt text"
  title="Pic2"
  style="display: inline-block; margin: 10 auto; max-width: 200px">

### Service

- Authentication/Authorization
- See user info and delete user with admin permission
- Notification
- Logout

### Stack & Library Tech
- [Reactjs](https://react.dev/) lets you build user interfaces out of individual pieces called components.
- [Redux](https://github.com/reduxjs/redux) is a predictable state container for JavaScript apps.
- [Redux-Toolkit](https://redux-toolkit.js.org/) Redux tool to configuration.

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



## Server

REST API & Auth server build by express and JsonWebToken to Authentication.

### Service

- Authentication/Authorization
- API to get user info.
- Store in MongoDB

### Stack & Library Tech
- [Express](https://expressjs.com/) lets you build API and auth service.
- [MongoDB](https://www.mongodb.com/) is the developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.
- [JsonWebToken](https://jwt.io/) are an open, industry standard RFC 7519 method for representing claims securely between two parties.

### Directory Layout
```bash
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.                     
├── src/                           # Application source code
│   ├── controller                 # Config store redux and provider reducer
│   ├── middleware/                # Verify Token middleware
│   ├── model/                     # Config Schema MongoDB and fake redis DB
│   ├── routes/                    # Contain all routes of server
│   │   ├── authRouter.js          # Route Authentication/ Authorization
│   │   ├── userRouter.js            # Route API GET user info
│   ├── index.js                   # Server entry point
│   ├── request.htt                # An API platform for using APIs.
├── .env                           # Environment variables for local development
└── package.json                   # The list of project dependencies + NPM scripts
```

### Prerequisites

- [Node.js][nodejs] v10.15 or higher
- [Yarn][yarn] v1.17 or higher &nbsp;
- [MongoDB][mongodb] account and connect to MONGODB Compass or Shell,...


---
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[mongodb]: https://www.mongodb.com/


