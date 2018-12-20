# MERN Stack Starter Code

## Steps Taken So Far
- `npm init` & `git init`
- `touch .gitignore`
- added `node_modules` to `.gitignore`
- created this `README.md`
- created new repo on Github; linked to this local git repo
- started `step-01` branch

## step-01
- before anything, you need to have MongoDB installed on your local machine
- if you have Homebrew, you can do `brew install mongodb` and then `brew services list` to see all services that are running on your machine. If you see `mongodb`, you are good to go! If not, you can run `brew services start mongodb`. You should only have to do this step once per machine. You don't need to re-install MongoDB or start the MongoDB services for every project.
- `npm install --save http express`
- require in `http` and `express`
- `app` is `express()`
- `server` is `http.createServer()` with `app` passed in
- `server.listen()` with a port of choice passed in
