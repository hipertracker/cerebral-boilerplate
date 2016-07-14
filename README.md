# cerebral-boilerplate

This is a new [Cerebral](http://www.cerebraljs.com) boilerplate with advanced Webpack, ESLint, Karma tests, settings. The Webpack settings was inspired by ["Using Webpack for Production JavaScript Applications"](https://egghead.io/courses/using-webpack-for-production-javascript-applications).

## What is Cerebral?

[Cerebral](http://cerebraljs.com) was designed to be very modular and composable for building very complex web apps. Technically Cerebral is an inteligent controller providing a scalable structure and predictable, clean UI state managment. It was designed for building complex web sites. It's architecture assumes one, central UI state, similar to Elm, Redux, [Om Next](https://github.com/omcljs/om)


All UI components are stateless and isolated from the logic. All UI logic is inside modules. Fore better debugging experience install [Chrome extension for Cerebral](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb).

The boilerplater uses [CSS/LESS modules](http://glenmaddern.com/articles/css-modules), so they can be imported to any component without risk of duplicated css class name crash.


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



