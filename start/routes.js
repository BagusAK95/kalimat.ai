'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//GET
Route.get('/:model(user|conversation)/:id', 'InjectorController.get')

//List
Route.get('/:model(user|conversation)', 'InjectorController.list')

//Create
Route.post('/:model(user|conversation)', 'InjectorController.create')

//Update
Route.put('/:model(user|conversation)/:id', 'InjectorController.update')

//Delete
Route.delete('/:model(user|conversation)/:id', 'InjectorController.remove')
