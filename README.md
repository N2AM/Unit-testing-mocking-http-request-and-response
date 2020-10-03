# Unit-testing-mocking-http-request-and-response

## Create project structure

## Add parcel-bundler

`npm install -g parcel-bundler`

## Add sass

`npm install -D sass`

## Add Axios

`npm install axios`

## As we’ll be using (async) and (await) inside of our project, we’ll install Babel and the @babel/polyfill package

`npm i @babel/core @babel/polyfill`

## Fix of error ( regeneratorRuntime is not defined parcel )

1 - `import "regenerator-runtime/runtime";`
2 - `install @babel/core and @babel/polyfill && import "babel-polyfill";`
3 - ` Adding "browserslist": [ "last 1 Chrome version" ] to package.json`
