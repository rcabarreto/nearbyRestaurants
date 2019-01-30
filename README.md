# Nearby Restaurants app

This is a small app that takes que geolocation from your web browser and fetches information from a API to show restaurants near you.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node installed to run this project.

````
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
$ sudo apt-get install nodejs
````

Check installation

````
$ node -v
````

````
Output
v10.X.X
````

### Installing

First, download the project, then cd into the project, install dependencies and start the application.

````
$ git glone https://github.com/rcabarreto/nearbyRestaurants.git nearbyRestaurants/
$ cd nearbyRestaurants/
$ npm install
$ npm start
````

After the app starts, you can access it on your web browser.

````
http://localhost:3000
````

## Built With

### Front-end
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap 4](https://getbootstrap.com/docs/3.3/)
* [Babel](https://babeljs.io/)
* [WebPack](https://webpack.js.org/)

### Back-end
* [Node.js](https://nodejs.org/en/about/)
* [Express.js](http://expressjs.com/pt-br/starter/installing.html)

## Authors

* **Rodrigo Barreto** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
