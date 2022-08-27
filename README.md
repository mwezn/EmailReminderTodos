# EmailReminderTodos
This is my first fullstack MERN app. It links together two other repos on here MongoBackend & ToDoList. 
Initially in March 2021 it was live & hosted on an AWS Ubuntu EC2 Instance
but now its deployed live on Heroku at: 
https://todoemailer.herokuapp.com 

You can register here with your email address & password to set & get email reminders for tasks you want to finish. 
https://todoemailer.herokuapp.com/register

## Table of Contents

- Purpose of this app
- Installation & running locally
- Technologies
- Branches
- Wins
- Challenges


## Heroku (git branch) updates

- git push heroku heroku:main

# Purpose of my app
- Is to allow users to keep track of their todos via email reminders
- The basic functionality is now working, with full CRUD functionality

# Installing & running locally

## **Technologies**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [ReactJs](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap] (https://www.bootstrapcdn.com/)
## Branches

- There are currently 2 branches `master` & `heroku`
- I had to refactor code in `heroku` since the original branch (master)
 was built to run off an AWS instance

## Wins
 - Full CRUD functionality. Users can register, login & set/ delete tasks they want
 - They can also check off tasks as completed
 - Can delete their accounts & email/ password details from the database
 - Reminder emails are sent at the correct times (from my personal email `m.w.g.nelson@gmail.com`)
 - Passwords are hashed securely
 - Emails sent using Nodemailer & OAuth tokens 

## Challenges overcome
 - Inefficient & broken code initially
 - Issues deploying
 - Timezone mismatch between frontend & backend code

## Future improvements 
  - I could refactor this code without using Mongoose
  - Add Jest unit & API tests
  - Currently Rewriting an identical backend in Docker
  - Improve CSS/ color scheme
  - Finally would like to rewrite this in React-Native
  so that it could be deployed on Android/iOS phones
