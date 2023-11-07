# Angular with lazy-loading, resolvers and alternatives database

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Authors
[Rodrigo da Silva Luz](https://github.com/rodrigodasilvaluz)

## Contact

<div>
  <a href="https://www.linkedin.com/in/rodrigo-da-silva-luz-b2a88555" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

## Project description

* This project was created as an example of querying data from different alternative databases.
* It was designed to have better scalability using lazy loading, loading resources on demand.
* Used resolvers, as good practice and code cleaning.

### Database used

* [IBGE Api](https://servicodados.ibge.gov.br/api/docs/noticias?versao=3)
* [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
* [json-server](https://www.npmjs.com/package/json-server)
* [Web SQL Database](https://www.w3.org/TR/webdatabase/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/#/`. The app will automatically reload if you change any of the source files.

## Development api with json-server

Created a db.json file in the project root with this json

```json
{
  "animals": [
    { "id": 1, "name": "Turca", "type": "Dog", "age": 4 },
    { "id": 2, "name": "Tom", "type": "Cat", "age": 10 },
    { "id": 3, "name": "Frida", "type": "Dog", "age": 11 },
    { "id": 4, "name": "Bob", "type": "Horse", "age": 2 },
    { "id": 5, "name": "Paco", "type": "Bird", "age": 1 }
  ]
}
```

Run `npm run server` for a dev api. Navigate to `http://localhost:3000` and `http://localhost:3000/animals`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Code scaffolding command lines used in the terminal, to generate modules with lazy-loading and resolvers

```powershell
ng generate module pages/home --route home --module app.module
ng generate resolver pages/customers/customers
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
