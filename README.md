# Installation

```
$ npm install
```

# Running the application

```
$ npm run server
$ npm run start
```

# Running the tests

```
$ npm run test
```

# Architecure overview

* specifying configuraton variables and environment specific data is done in the */config/constants.js* file (it is hardcoded now but making it environmental variables in order to implement CICD easier later on would not be a problem with this approach)
* the application runs in the development mode by default (production mode is supported as well)
* test configuration (including HTML test reports and code coverage reports) can be set in the jest.config.js file
* unit tests mocks are currently placed under the */tests* directory, the tests themselves are places alongside the components
* clients for server communication are placed under the */src/clients* folder (each client contains adequate data models as well - those can be used througout the application)
