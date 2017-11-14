# :pizza: Logger
A pizza logging app following the MVC design pattern using MySQL, Node, Express, Handlebars and a custom ORM.

### Overview

In this assignment, you'll create a pizza logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

### Before You Begin

* Eat-Da-pizza! is a restaurant app that lets users input the names of pizzas they'd like to eat.

* Whenever a user submits a pizza's name, your app will display the pizza on the left side of the page -- waiting to be devoured.

* Each pizza in the waiting area also has a `Devour it!` button. When the user clicks it, the pizza will move to the right side of the page.

* Your app will store every pizza in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](pizza_demo.mp4).

## Instructions

#### Model setup

* Inside your `pizza` directory, create a folder named `models`.

  * In `models`, make a `pizza.js` file.

    * Inside `pizza.js`, import `orm.js` into `pizza.js`

    * Also inside `pizza.js`, create the code that will call the ORM functions using pizza specific input for the ORM.

    * Export at the end of the `pizza.js` file.

#### Controller setup

1. Inside your `pizza` directory, create a folder named `controllers`.

2. In `controllers`, create the `pizzas_controller.js` file.

3. Inside the `pizzas_controller.js` file, import the following:

   * Express
   * `pizza.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `pizza` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database. 

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details. 

