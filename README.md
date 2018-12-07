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
