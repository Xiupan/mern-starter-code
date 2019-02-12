# MERN Stack Starter Code

## Magical Postman Collection to Test your NodeJS Server!
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e3e792f85dd19e55bf13#?env%5BLocal%20Environment%5D=W3siZGVzY3JpcHRpb24iOnsiY29udGVudCI6IiIsInR5cGUiOiJ0ZXh0L3BsYWluIn0sInZhbHVlIjoibG9jYWxob3N0OjUwMDAiLCJrZXkiOiJ1cmwiLCJlbmFibGVkIjp0cnVlfSx7ImRlc2NyaXB0aW9uIjp7ImNvbnRlbnQiOiIiLCJ0eXBlIjoidGV4dC9wbGFpbiJ9LCJ2YWx1ZSI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSTFZekU1Tm1FeVptTmxPR1ZrTmpOallUTTNNV1ZoWXpZaUxDSnBZWFFpT2pFMU5EVXhOekV4TnpRek9UTjkuWmtiOWMySTh0eC14Z1FuZ2VmVGs4RTlqRjJiSDNsYkFBb05xVk5xeVM3QSIsImtleSI6ImF1dGhUb2tlbiIsImVuYWJsZWQiOnRydWV9XQ==)
- Click the button above ^, and then follow the prompts to open the collection in Postman! :ultrafastparrot:
- Use the collection in Postman to test your NodeJS backend after finishing step-04

## Steps Taken So Far
- `npm init` & `git init`
- `touch .gitignore`
- added `node_modules` to `.gitignore`
- created this `README.md`
- created new repo on Github; linked to this local git repo
- started `step-01` branch

## step-01
- before anything, you need to have MongoDB installed on your local machine
- if you have Homebrew, you can do `brew install mongodb` and then `brew services list` to see all services that are running on your machine. Then run `brew services start mongodb`. You should only have to do this step once per machine. You don't need to re-install MongoDB or start the MongoDB services for every project.
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

## step-05B (Optional)
- to magically start the backend and frontend together with one command, do `npm install -g concurrently nodemon`
- if you take a look at the package.json files in frontend, backend and the root project folder, you will see some new scripts that use `concurrently` in order to start both the backend and frontend together by running `npm run dev` in the root folder
- this step is optional but may speed up the development process

## step-06
- This step is very involved and is setting up Authentication and Authorization on the backend
- `npm install --save bcrypt-nodejs jwt-simple passport passport-jwt passport-local`
- require in `passport` and `body-parser` in `app.js`
- `app.use(bodyParser.json())` in `app.js`
- bodyParser is built in to express and just needs to be required in
- bodyParser will allow you to parse the body of requests; without it, the backend cannot retrieve the body of POST requests
- created a folder `config` and put `keys.js` inside it
- for instructional purposes, I am pushing up the `config` folder to GitHub. But if you are using this code for your own app, you probably will want to hide all your API keys and stuff inside the `keys.js` file and then add the `config` folder to your `.gitignore` file
- added functions to `User.js` in order to hash the passwords before `.save()` and also to `comparePassword`
- added `services` folder and put `passport.js` inside it
- added all the login stuff to `passport.js`
- for further help and reference, please refer to the Passport Documentation at `https://www.npmjs.com/package/passport-jwt`
- created the `authentication.js` file inside `controllers`
- `authentication.js` has a `tokenForUser` function, which encodes the user's id, a timestamp, and the jwt-secret
- the `signin` function returns the `token` to the front-end
- the `signup` function creates a new User and then returns the `token`
- in `routes.js`, we bring it all together and use the `Authentication` controller, the `passportService` and `passport`, we `requireAuth` and `requireSignin` that both use "Passport Strategies" that allow them to work, and then we use `requireAuth` to protect our test route `/api/test`
- If you have been following along since the beginning, your DB might be populated with Users that simply have regular strings of "1234" as their passwords. Using these Users will not work anymore. In the terminal, run `mongo`, then `show dbs` to see all your dbs that are on your local machine, then `use your-db-name`, then `show collections` to see all your collections(tables in Mongo are called collections), then to drop a table in Mongo, you would do `db.users.drop()` and it should return `true`. The next time you run the backend again, it should populate with new Users that have hashed passwords now.
- Now you can hit the `/api/user/signin` route with a valid User in the body of the request in Postman and you will get a `token` back
- set that `token` inside your `headers` inside Postman and then try and hit `/api/test`, if you have a valid `token`, you should be able to see that message in the body of the response!
