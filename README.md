# HealthCareCarrierBackend

Web-App to explore and build business-model-pattern for your business in public health care. Create projects, manage your business-model-canvases and get inspired by existing patterns to support you in creating your own new business or scale / expand your current business. A demonstration of the full app can be found on [netlify]. This Project is all about the back-end part of the project. The front-end part can be found  [here].

## Prerequisites
* Node v12+
* a sense of Typescript

## Getting Started

```$ git clone git@github.com:FlorianTh2/BusinessModelDigitalHealthBackend.git```

```$ cd ./BusinessModelDigitalHealthBackend.git```

```$ npm install```

```$ npm install -g prisma```

```$ npm install -g typescript```

```$ npm install -g ts-node```

## Documentation: Angular Modules and Componentes


- src/
  - auth/
    - Authorization.ts: includes jwt-related-functions
    - Cryptography.ts: includes crypto-functions like hashing (SHA512)
  - config/
    - include a kind of api to read (not store) the (development-/ production) environment variables
  - email/
    - responsible for sending a email (via nodemailer) to very the informations 
  - generated/
    - location to store all prisma-generated files
  - prisma/
    - includes datamodel of the database, graphql schema, seed data
  - resolvers/
    - location for the graphql-resolver-functions
    - includes nested resolvers and fragments too
  - types/
    - defintion of custom types e.g. for authentication
  - app.ts
    - creates express server with apollo middleware
  - prisma.yml
    - configuration-file for prisma
  - tsconfig.json
    - configuration-file for typescript



## Important commands
* prisma reset: resets db
* prisma deploy: deploys current db-schema to prisma-cloud
* prisma generate: generates code-bindings of the graphql-db-schema in the app
* prisma seed -r: resets db and seeds the database


## Build with

* npm 6
* node 12
* typescript
* prisma 1
* apollo server

## Acknoledgements

* Thanks to my supervisor Mr. T.Knape@Charité Berlin for the help with this student project


   [here]: <https://github.com/FlorianTh2/BusinessModelDigitalHealth>
   [netlify]: <https://quirky-booth-47a807.netlify.app>
