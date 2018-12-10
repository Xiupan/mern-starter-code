# MERN Stack Starter Code

## Steps Taken So Far
- `npm init` & `git init`
- `touch .gitignore`
- added `node_modules` to `.gitignore`
- created this `README.md`
- created new repo on Github; linked to this local git repo
- started `step-01` branch

## step-01
- `npm install --save http express`
- require in `http` and `express`
- `app` is `express()`
- `server` is `http.createServer()` with `app` passed in
- `server.listen()` with a port of choice passed in

## step-02
- `npm install --save mongoose`
- require in `mongoose`
- `mongoose.connect()` with url of localhost db and `{ useNewUrlParser: true }`

## step-03
- created `models` folder and added `User.js` inside
- inside `User.js`:
  - require `mongoose`
  - `Schema` is `mongoose.Schema`
  - define the model's schema with `userSchema` which is a `new Schema` with an `object` passed in, with all attributes defined
  - `const ModelClass = mongoose.model('users', userSchema)`
  - created seed data inside the model file that only gets created if the collection is empty
  - `module.exports = ModelClass`  
- require in `User.js` in `app.js`

## step-04
- created `userController.js`
- require in model file
- create a function called `readAll` that has `request, response, next` as arguments
- the function searches the `User` model; if there is an error, it returns the error to the response with a 500 status code. Otherwise, it returns the array of `User` objects from the DB.
- created `router` folder and created `routes.js` inside
- require `UserController` inside `routes.js`
- create test routes. One to see if the backend is working and serving up a simple JSON message. Another to show data from the DB.
- require in `routes.js` inside `app.js`
- `router(app)`

## step-05
- create the frontend; `npx create-react-app frontend`
- render data in `App.js` in `frontend`
- `constructor()` with `super()` and set the initial state
- `componentDidMount()` with a fetch to the our `users` backend route, and then setting state with the users data
- render out the state
- on the backend, `npm install --save cors`
- require in `cors`
- then `app.use(cors())`
