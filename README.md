# Micro frontends with Angular Module Federation

## Introduction
As projects get bigger and bigger it is very difficult to maintain and collaborate these projects. As projects get bigger, their build time increases, unit tests increase, team size increases, almost everything gets bigger and gets to the stage where we can’t maintain them.

So, it’s always better to have smaller projects and smaller teams for the teams' performance and deliver the products faster to the end-user. But, sometimes your product or your app has so many features that maintaining smaller teams and projects is out of your hands. You can have separate teams for each feature but managing teams, merging all features into one repo, and resolving conflicts, etc.. all these are tedious tasks that we can avoid with Micro Frontends.

Micro-Frontends are not the framework or library. This is the methodology where we can divide our fat apps into smaller and maintainable apps and design some kind of orchestration to place these apps in the browser window so that end-users see as a single app

## Concepts
- *Host* : This is the project that displays the remote(s). You want to consider the host as the shell for the application responsible for coordinating the remote(s)
- *Remote* : This is part of the application, not the entire application, that will be displayed by the host. In theory, this can be framework agnostic. In this article we will be using Angular only. A Micro FrontEnd project will contain only one host, but multiple remotes.
- *Monorepositor*y : Applications will live in a monorepository — that means they are all in the same workspace/repository.
- *Micro FrontEnd Framework* : This is the framework that sits between the host and remote(s) to coordinate loading and unloading of remotes. In our case this is Webpack 5 Module Federation.

## Project
### Info
This tutorial shows how to use Webpack Module Federation together with the Angular CLI and the @angular-architects/module-federation plugin. The goal is to make a shell capable of loading a separately compiled and deployed microfrontend

### Build and run
- Build of the project - `npm install`
- Run the project - `npm run start:all`

### Access the Micro frontends
In order to access the *Host* that manages all *remotes*, use following link - http://localhost:5000/

## Reference
- [How To Implement Micro-Frontend Architecture With Angular](https://medium.com/bb-tutorials-and-thoughts/how-to-implement-micro-frontend-architecture-with-angular-e6828a0a049c)
- [Angular Microfrontend Guide](https://levelup.gitconnected.com/your-first-angular-microfrontend-58950768a465?gi=9ff3a50b37e3)
- [Dynamic Module Federation with Angular](https://www.angulararchitects.io/aktuelles/dynamic-module-federation-with-angular/)
- [Getting Started With Micro FrontEnds and Angular](https://blog.briebug.com/blog/micro-frontends-angular)
- [Getting Started with Webpack Module Federation and Angular](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md)
