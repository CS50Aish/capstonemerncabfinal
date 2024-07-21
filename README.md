# capstonemerncabfinal
Full Stack Capstone Project on Cab Service Application and Booking

## Cab Service Application

### Course-End Project 1

#### Description
The aim of this project is to create a cab booking application for the employees of a multinational company, utilizing the concepts of the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application seeks to streamline the cab booking process, making it more efficient and user-friendly by transitioning from an offline to an online system.

### Real-World Scenario
A multinational company has observed a significant decline in the usage of their internal cab service. An internal survey revealed that the current booking process is cumbersome and inefficient, with offline allocation of cabs being tedious and prone to errors. To address these issues, the company desires an online cab booking application to eliminate manual efforts and enhance the booking experience for employees.

### Project Objectives
- Develop a user-friendly online platform for cab booking.
- Streamline the allocation process of cabs to employees.
- Ensure efficient and transparent booking and allocation of cabs.
- Reduce manual efforts and errors in the booking process.

### Technology Stack
- **MongoDB**: For database management, storing user data, cab details, and booking history.
- **Express.js**: As the web application framework for building the backend.
- **React.js**: For creating the frontend user interface.
- **Node.js**: To run the server-side code and manage backend services.

### Key Features
1. **User Authentication**:
   - Employee login and registration.
   - Role-based access control (e.g., admin, employee).

2. **Cab Booking System**:
   - Real-time availability of cabs.
   - Easy-to-use booking interface.
   - Option to book immediate or scheduled rides.

3. **Booking Management**:
   - View, modify, or cancel bookings.
   - Track booking history and ride status.

4. **Admin Dashboard**:
   - Manage cab availability and schedules.
   - Monitor bookings and generate reports.
   - Assign drivers to cabs and manage their schedules.

5. **Notifications**:
   - Email and SMS notifications for booking confirmations, cancellations, and ride reminders.

### Implementation Plan

1. **Requirement Analysis**:
   - Conduct meetings with stakeholders to gather detailed requirements.
   - Create user stories and use cases based on the gathered requirements.

2. **Design**:
   - Design the database schema using MongoDB.
   - Create wireframes and mockups for the user interface.
   - Plan the architecture of the application.

3. **Development**:
   - Set up the development environment with Node.js, Express.js, React.js, and MongoDB.
   - Implement user authentication and role-based access control.
   - Develop the cab booking module.
   - Create the admin dashboard with necessary functionalities.
   - Integrate notification services for emails and SMS.

4. **Testing**:
   - Perform unit testing for individual components.
   - Conduct integration testing to ensure modules work together seamlessly.
   - Carry out user acceptance testing with a group of employees.

5. **Deployment**:
   - Deploy the application on a cloud platform (e.g., AWS, Heroku).
   - Set up a continuous integration and deployment pipeline.
   - Ensure the application is scalable and secure.

6. **Maintenance**:
   - Monitor the application for performance and security issues.
   - Provide regular updates and feature enhancements based on user feedback.
   - Offer technical support to users and administrators.

### Conclusion
This cab booking application aims to revolutionize the way employees book cabs within the company by leveraging the MERN stack's capabilities. By transitioning from a manual, offline process to an efficient online system, the application will enhance user satisfaction, reduce operational inefficiencies, and provide a robust solution for managing the company's internal cab service.

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal$ npx create-react-app cab-service

Creating a new React app in /home/labuser/Desktop/capstonemerncabfinal/cab-service.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1483 packages in 1m

261 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 63 packages, and changed 1 package in 8s

261 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1546 packages in 3s

261 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created cab-service at /home/labuser/Desktop/capstonemerncabfinal/cab-service
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd cab-service
  npm start

Happy hacking!
npm notice 
npm notice New minor version of npm available! 10.2.4 -> 10.8.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.2
npm notice Run npm install -g npm@10.8.2 to update!
npm notice 

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service$ npm install axois

added 1 package, and audited 1547 packages in 4s

261 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal$ mkdir cab-service-backend
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal$ cd cab-service-backend/
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (cab-service-backend) 
version: (1.0.0) 
description: Full Stack MERN Capstone Cab Service Application
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya
license: (ISC) 
About to write to /home/labuser/Desktop/capstonemerncabfinal/cab-service-backend/package.json:

{
  "name": "cab-service-backend",
  "version": "1.0.0",
  "description": "Full Stack MERN Capstone Cab Service Application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ npm init  -y
Wrote to /home/labuser/Desktop/capstonemerncabfinal/cab-service-backend/package.json:

{
  "name": "cab-service-backend",
  "version": "1.0.0",
  "description": "Full Stack MERN Capstone Cab Service Application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC",
  "keywords": []
}

Compiled successfully!

You can now view cab-service in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service$ npm install express mongoose body-parser cors

added 18 packages, and audited 1568 packages in 5s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service$ npm install --save-dev nodemon

added 6 packages, and audited 1574 packages in 4s

263 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-frontend/backend$ cd ..
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ cd ..
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal$ cd cab-service-backend/
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ cd backend/
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend/backend$ npm install express mongoose body-parser cors

added 86 packages, and audited 87 packages in 3s

13 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend/backend$ npm install --save-dev nodemon

added 29 packages, and audited 116 packages in 2s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

{
  "name": "cab-service-backend",
  "version": "1.0.0",
  "description": "Full Stack MERN Capstone Cab Service Application",
  "main": "index.js",
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
  },
  "author": "Aishwarya",
  "license": "ISC",
  "keywords": [],
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "mongoose": "^8.5.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
