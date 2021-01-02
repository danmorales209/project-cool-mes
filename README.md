# Note:

This project has been archived- the MongoDB server associated with the deployed instance was removed and is no longer available. The project should still be to run locally. If one of us gets around to updating the configuration then we can consider redeploying.

# MAKE.iT

This is an application designed for small businesses to keep track of their manufacturing process. This will help store inventory, orders, product recipes, as well as how far along the in the manufacturing process an active order is. The value in this application is the automatic processes that happen between the different pages such as upon order completion the inventory is updated.

## Getting Started

### Prerequisites

Make sure you have a compatible browser such as chrome or firefox.

### Installing

Clone the repository to your computer and run npm install.

## Deployment

1. Clone the repo
2. remove origin `git remote remove origin`
3. add your own remote `git remote add origin master <url>`
4. `git add .`
5. `git commit -m "message"`
6. `heroku create`
7. `git push heroku master`
8. go to heroku, click on `configure addons`
9. search and select `JAWDB`
10. Done!

## Built With

* [Reactstrap](https://reactstrap.github.io/) - The react library used for basic bootstrap 4 components
* [React.js](https://reactjs.org/) - The javascript library for building user interfaces
* [Bootstrap](https://getbootstrap.com/) - Front-end component library
* [MongoDB](https://www.mongodb.com/) - A database that stores data in flexible, JSON-like documents
* [Mongoose](https://www.npmjs.com/package/mongoose) - A MongoDB object modeling tool designed to work in an asynchronous environment.
* [Node.js](https://nodejs.org/en/) - Asynchronous event driven JavaScript runtime
* [Express.js](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework
* [Heroku](https://www.heroku.com/) - A cloud-based development platform as a service
* [Node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - URL-safe means of representing
   claims to be transferred between two parties
* [node.bcrypt.js](https://www.npmjs.com/package/bcrypt) - A library or hashing passwords
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js


## Authors

* **Andrea Swanson** - (https://github.com/MetalJester)

* **Daniel Morales** - (https://github.com/danmorales209)

* **Lindsay Campbell** - (https://github.com/Lindca)

* **Daniel Enrico** - (https://github.com/thedanielenrico)


## Acknowledgments

* Grateful to our intructor Leo and our TA's Kurt and Alex for helping us fix our bugs.
* Our inspiration came from our group member Daniel Enrico and his many skills in making things such as beer and bread and the need to have a simple manufacturing execution system.
