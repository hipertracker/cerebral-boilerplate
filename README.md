# cerebral-boilerplate

This is a new [Cerebral](http://www.cerebraljs.com) boilerplate with advanced Webpack2, ESLint, Karma tests, settings. The Webpack settings was inspired by ["Using Webpack for Production JavaScript Applications"](https://egghead.io/courses/using-webpack-for-production-javascript-applications).

## What is Cerebral?

[Cerebral](http://cerebraljs.com) was designed to be very modular and composable solution for building very complex web apps in JavaScript. Technically Cerebral is an intelligent controller providing a scalable structure and management of the single, central UI state.

The boilerplate's code example uses stateless React components as UI layer. The state of the whole UI is controlled by the central single model tree and the Cerebral's modules.

## Instalation and start
```
git clone https://github.com/hipertracker/cerebral-boilerplate
cd cerebral-boilerplate
npm setup
npm start
```

## Testing

The boilerplate uses [Karma](https://karma-runner.github.io) with [Chai](http://chaijs.com/) and [Mocha](https://mochajs.org/).

```
npm run watch:test
```

## Building

The build creates 3 bundles, one with app source files, second with vendor files and third for common javascript code. It also uses Webpack 2 with tree-shaking to eliminate duplicated code. Every build is hash stamped to avoid cache issues.

```
npm run build
```

## Building for production

```
npm run build:prod
```

## Screencasts

#### cerebral-boilerplate - communication between pages

[![IMAGE ALT TEXT](http://img.youtube.com/vi/KJfg01AF1kM/0.jpg)](https://www.youtube.com/watch?v=KJfg01AF1kM&feature=youtu.be "cerebral-boilerplate - communication between pages")

#### New Cerebral Debugger PREVIEW

[![IMAGE ALT TEXT](http://img.youtube.com/vi/o76KvYOKg90/0.jpg)](https://www.youtube.com/watch?v=o76KvYOKg90  "New Cerebral Debugger PREVIEW")
