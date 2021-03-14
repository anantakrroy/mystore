# My Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. To run on your port of choice use `ng serve --port <PORT_NUMBER>`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

*Note :*   Tests have not been written for this project yet.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

*Note :*   Tests have not been written for this project yet.
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development Strategy : 

1. The project uses the [FakeStoreAPI](https://fakestoreapi.com/) to get dummy product data.
2. Project is organised into the `src` , `models`, `services` folder hierarchy.
3. **Models** folder includes model for Product and CartItem . 
- Product model matches the one received by the API. 
- CartItem model represents an item in shopping cart with extra information about purchase quantity.
4. Routing implemented using Router Module. Also, implemented conditional routing using AuthGuard service.
5. Services like cart service used to pass data around sibling components. 
6. *Extra Item -* : Implemented **cart bubble** to show current unique product items added to the cart.
7. Implemented **sanitised customer form** which is **validated for user inputs** . Appropriate error messages also shown for invalid input entered. 



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
