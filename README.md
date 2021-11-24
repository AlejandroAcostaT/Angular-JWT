# AngularJWT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Instalation

Run `npm install` to install all components to run the project. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project

This project utilizes the https://reqres.in/ API.   
This project counts with 2 views, the first one is a Login View, the second one is a paginated User List.   
The token is saved in the Local Storage and is sent by an interceptor service throught the Request Header as follows: `authorization: Bearer <token>`.

## Login

email: eve.holt@reqres.in
password: cityslicka   

Any other user gives an error

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
