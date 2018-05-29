# jitsi-commands-for-slack

Simple command for slack that return an jitsi url

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before to start, we need some thigs

* [brew](https://brew.sh/)
* [git](https://git-scm.com/)

### Setup

A step by step series of examples that tell you have to get a development env running

Install node

```
brew install node
```

Install dependencies

```
npm install
```

Config the environment variables (for develoment use .env)

```
cp .env.examples .env
nano .env
```

For develoment use

```
npm run watch
```

Now you can do a post to http://localhost:3000/api/v1/commands/call a see the magic

## Running unit tests

To execute the unit tests via [Mocha](https://mochajs.org/) use 

```
npm test
```

## Built With

* Node
* TypeScript
* Expressjs

## Authors

* **Adriel Diaz** - *Developer* - [ADSA](https://github.com/adriexnet)
