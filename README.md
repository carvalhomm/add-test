# AddTest

Projeto de teste para Integração com APIs da Marvel.

    Observação: A API da Marvel está em fase Beta.

## API Marvel

As APIs Marvel são todas requisições GET, que são autenticadas passando uma chave `apikey` na query da consulta.
Mais informações podem ser acessadas no link [documentação iterativa](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0)
Foram usados duas APIs principais:

### Comics

    https://gateway.marvel.com:443/v1/public/comics

API de consulta dos quadrinhos de todo o universo Marvel. A estrutura do objeto de retorno pode ser consultado em [entidades](https://developer.marvel.com/documentation/entity_types)

### Characters

    https://gateway.marvel.com:443/v1/public/comics

API de consulta para todos os personagens da Marvel. A estrutura do objeto de retorno pode ser consultado em [entidades](https://developer.marvel.com/documentation/entity_types)

As duas APIs consumidas acimas possuem relações entre si. Por exemplo a API de `Comics` retorna os personagens que aparecem na estória, assim como o endpoint associado. O mesmo vale para a API de `Characters`, que retorna os quadrinhos nos quais o personagem aparece.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
