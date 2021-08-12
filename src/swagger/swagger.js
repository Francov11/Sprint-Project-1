/**
 * @swagger
 * /users:
 *  get:
 *    summary: Users
 *    description: Users list
 *    responses:
 *       200:
 *         description: Users list
 */

/**
 * @swagger
 * /users:
 *  post:
 *    tags: [auth]
 *    summary: usuarios.
 *    description : Listado de usuarios.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: usuario
 *        description: usuario  a crear
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - phoneNumber
 *            - address 
 *            - email
 *            - password
 *          properties:
 *            name:
 *              description: Nombre del usuario
 *              type: string
 *              example: juangomez
 *            phoneNumber:
 *              description: Telefono del usuario
 *              type: string
 *              example: 221 1234567
 *            address:
 *              description: Dirección de envio
 *              type: string
 *              example: La Plata, Calle 7 # 1234
 *            email:
 *              description: Correo electrónico del usuario 
 *              type: email
 *              example: juangomez@gmail.com
 *            password:
 *              description: Contraseña
 *              type: password
 *              example: 1234
 *    responses:
 *      201:
 *       description: Usuario registrado
 *      401:
 *       description: Usuario no registrado
 *      
 */

/**
 * @swagger
 * /users/login:
 *  post:
 *    tags: [auth]
 *    summary: usuarios.
 *    description : Listado de usuarios.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: usuario
 *        description: usuario  a crear
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              description: Correo electrónico del usuario 
 *              type: email
 *              example: juangomez@gmail.com
 *            password:
 *              description: Contraseña
 *              type: password
 *              example: 1234
 *    responses:
 *      201:
 *       description: Usuario logeado
 *      401:
 *       description: Usuario no logeado
 *      
 */

