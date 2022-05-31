# countmedown
Countdown To-Do App

## What is the purpose?
This app is a to-do list with a countdown feature. The app allows you to:

* Enter a task title
* Enter a task description
* Enter a completion date
* Display the time remaining for the task
* Allow you to delete tasks

### Tech Used
This app was built using:

* Node.js
* Express
* MongoDB/Mongoose
 

### Optimizations
Future improvements could include:

* A way to delete multiple tasks quickly. 
* Ability to reorder tasks either by urgency or completion date.

### Lessons Learned
... lessons still loading...



## Development environment setup

### To initialize your development environment with git:
* Visit the main repo: https://github.com/intelagense/countmedown
* Click Fork in the top right, instructions here: https://docs.github.com/en/get-started/quickstart/fork-a-repo
* Navigate to your copy of the repo (https://github.com/YOURUSERNAME/countmedown)
* Click the pull down that says Code, and copy the url in the box to your clipboard
* Create a folder in which you will work on this project, for example C:\Development\
* In your terminal, type:

```shell
git clone https://github.com/YOURUSERNAME/countmedown.git
```
This will make a copy of YOUR fork of the original repo.
Change into this directory:
```shell
cd /countmedown
```

In order to be able to fetch changes from the upstream (original) repo to your local repo, do the following:

* Navigate to the ORIGINAL repo, https://github.com/intelagense/countmedown
* Click the pull down that says Code, and copy the url in the box to your clipboard (https://github.com/intelagense/countmedown.git)
* In your terminal, type:
```shell
git remote -v
```
* This will show your current remote repo, which should be YOUR repo
```shell
origin  https://github.com/YOURUSERNAME/countmedown.git (fetch)
origin  https://github.com/YOURUSERNAME/countmedown.git (push)
```

* To add the new upstream, type:
```shell
git remote add upstream https://github.com/intelagense/countmedown.git
```

* Now if you type:
```shell
git remote -v
```
* You should see:
```shell
origin  https://github.com/YOURUSERNAME/countmedown.git (fetch)
origin  https://github.com/YOURUSERNAME/countmedown.git (push)
upstream        https://github.com/intelagense/countmedown.git (fetch)
upstream        https://github.com/intelagense/countmedown.git (push)
```

* Now you may edit the files in your local copy.
* To push your changes:
```shell
git add .
git commit -m 'message'
git push
```

* To sync your files with upstream (original repo, https://github.com/intelagense/countmedown) type:
```shell
git fetch upstream
```

* To install the necessary npm packages listed in package.json:
```shell
npm install
```

### User credentials (use your own mongodb credentials for the time being)
* Use dotenv module for credential storage on your local machine
* .env file contains login information, and MUST BE in your .gitignore
* THIS MUST BE SETUP BEFORE PUSHING TO GITHUB
* NO pull requests should be allowed that include credentials

Example of dotenv use:

```javascript
const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PW}@cluster0.bzzkg.mongodb.net/?retryWrites=true&w=majority`;
```

Example of file ".env"  (this file is in your project root folder):
(plain text file, full name .env)

Be sure to use the quotes to surround your values if they may have strange characters or spaces
```shell
PW = 'password'
USER = 'username'
PORT = 8000
```

This is accessed via:
```javascript
process.env.USER
process.env.PW
process.env.PORT

// For example:
const passwd = `${process.env.PW}`;
```
