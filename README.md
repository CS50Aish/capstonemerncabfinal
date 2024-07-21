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

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ npm run server

> cab-service-backend@1.0.0 server
> nodemon backend/server.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node backend/server.js`
(node:7470) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:7470) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server is running on port 5000

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ npm run server

> cab-service-backend@1.0.0 server
> nodemon backend/server.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node backend/server.js`
(node:10689) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:10689) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server is running on port 5000

labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-backend$ cd ..
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal$ cd cab-service-frontend/
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-frontend$ npm update
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm WARN deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-methods instead.
npm WARN deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
npm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
npm WARN deprecated 
npm WARN deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
npm WARN deprecated domexception@2.0.1: Use your platform's native DOMException instead
npm WARN deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
npm WARN deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
npm WARN deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

added 1526 packages, and audited 1527 packages in 2m

263 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
labuser@ubuntu2204:~/Desktop/capstonemerncabfinal/cab-service-frontend$ npm upgrade

up to date, audited 1527 packages in 14s

263 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Compiled successfully!

You can now view cab-service in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully