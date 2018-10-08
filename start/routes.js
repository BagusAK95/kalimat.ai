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

/* --> End Point <--- */

Route.get('/:model(user|conversation)/:id', 'InjectorController.get')
Route.get('/:model(user|conversation)', 'InjectorController.list')
Route.post('/:model(user|conversation)', 'InjectorController.create')
Route.put('/:model(user|conversation)/:id', 'InjectorController.update')
Route.delete('/:model(user|conversation)/:id', 'InjectorController.remove')

/* --> Documentation <--- */

Route.get('/docs.json', () => {
  const swaggerJSDoc = require('swagger-jsdoc')

  const options = {
    swaggerDefinition: {
      info: {
        title: 'kalimat.ai',
        version: '1.0.0',
        description: 'This is about documentation of kalimat.ai'
      },
      basePath: "/",
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    apis: ['./start/routes.js']
  }

  return swaggerJSDoc(options)
}).as('swaggerSpec')

Route.get('/', ({ view }) => {
  return view.render('swaggerUI')
}).as('swaggerUI')
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Detail
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - User
 *     summary: List
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page
 *         required: true
 *         type: string
 *       - name: limit
 *         in: query
 *         description: Limit
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - User
 *     summary: Create
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         description: Name
 *         required: true
 *         type: string
 *       - name: gender
 *         in: formData
 *         description: Gender (male | female)
 *         required: true
 *         type: string
 *       - name: city
 *         in: formData
 *         description: City
 *         required: true
 *         type: string
 *       - name: phone
 *         in: formData
 *         description: Phone
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         description: Email
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Update
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         required: true
 *         type: string
 *       - name: name
 *         in: formData
 *         description: Name
 *         required: true
 *         type: string
 *       - name: gender
 *         in: formData
 *         description: Gender (male | female)
 *         required: true
 *         type: string
 *       - name: city
 *         in: formData
 *         description: City
 *         required: true
 *         type: string
 *       - name: phone
 *         in: formData
 *         description: Phone
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         description: Email
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /conversation/{id}:
 *   get:
 *     tags:
 *       - Conversation
 *     summary: Detail
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /conversation:
 *   get:
 *     tags:
 *       - Conversation
 *     summary: List
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page
 *         required: true
 *         type: string
 *       - name: limit
 *         in: query
 *         description: Limit
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /conversation:
 *   post:
 *     tags:
 *       - Conversation
 *     summary: Create
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         in: formData
 *         description: User ID
 *         required: true
 *         type: string
 *       - name: direction
 *         in: formData
 *         description: Direction (incoming | outgoing)
 *         required: true
 *         type: string
 *       - name: message
 *         in: formData
 *         description: Message
 *         required: true
 *         type: string
 *       - name: timestamp
 *         in: formData
 *         description: Timestamp
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /conversation/{id}:
 *   put:
 *     tags:
 *       - Conversation
 *     summary: Update
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         required: true
 *         type: string
 *       - name: userId
 *         in: formData
 *         description: User ID
 *         required: true
 *         type: string
 *       - name: direction
 *         in: formData
 *         description: Direction (incoming | outgoing)
 *         required: true
 *         type: string
 *       - name: message
 *         in: formData
 *         description: Message
 *         required: true
 *         type: string
 *       - name: timestamp
 *         in: formData
 *         description: Timestamp
 *         required: true
 *         type: string
 */

/**
 * @swagger
 * /conversation/{id}:
 *   delete:
 *     tags:
 *       - Conversation
 *     summary: Delete
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         required: true
 *         type: string
 */
