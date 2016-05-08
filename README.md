# Welcome To Formal Class System

## To Develop
1. run `npm i` to install all npm required pachages.
2. run `npm install -g gulp` to install gulp globally, because `gulp` is constantly used in development. We want to be able to execute it directly.
3. run `bundle install` to install all the gems.
4. In the project folder, type `gulp`. `gulp` is an automatic task runner that will look through all the script and css required by the projects, and compile those scripts (it uses `babel` to transpile jsx, ES6 syntax to ES5 and scss to css, and put all files in Rails assets directory for Rails asset pipeline). `gulp` will continue to run and re-compile assets whenever its depency is modified.
5. In another terminal, run `rails s` to start a local rails server on port 3000.
6. In your browser, connect to `127.0.0.1:3000`.
