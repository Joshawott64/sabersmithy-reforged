# Sabersmithy Reforged

Sabersmithy Reforged is a React-based web application that allows user to create their own custom lighsabers from the hit sci-fi franchise: Star Wars.

11 database tables are stored in a PostgreSQL database and the program utilizes Sequelize for easier querying and seeding.

A Redux store and session check function check for a user id upon startup and if none is found, it automatically navigates the user to the login page using React-Router-Dom.

## Running Locally

1. Clone repo
2. Change working directory into the cloned project directory
3. Install node packages `npm install`
4. Install PostgreSQL, if not already installed on machine
   - [Download PostreSQL](https://www.postgresql.org/download/)
5. Create database by running: `npm run initdb`
6. Seed the database by running: `npm run seed`
7. Run the app `npm run dev`
