/**
 * @swagger
 * /:
 *  get:
 *    tags: [Users]
 *    summary: usuarios
 *    description: List of users
 *    parameters:
 *       - in: query
 *         name: index
 *         required: true
 *         description: Id of the logged user.
 *         schema:
 *           type: integer
 *           example: 
 *    responses:
 *       200:
 *         description: List of users
 */

/**
 * @swagger
 * /register:
 *  post:
 *    tags: [Users]
 *    summary: usuarios.
 *    description : Register of users.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: usuario
 *        description: user to create
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
 *              description: Name
 *              type: string
 *              example: Thomas 
 *            phoneNumber:
 *              description: Phone number
 *              type: string
 *              example: 221 1234567
 *            address:
 *              description: Address
 *              type: string
 *              example: address 1
 *            email:
 *              description: Email 
 *              type: email
 *              example: thomas@nothing.com
 *            password:
 *              description: Password
 *              type: password
 *              example: thomas111
 *    responses:
 *      201:
 *       description: User register
 *      401:
 *       description: User not registered
 *      
 */

/**
 * @swagger
 * /login:
 *  post:
 *    tags: [Users]
 *    summary: usuarios.
 *    description : Login of users.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: usuario
 *        description: Email and password
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              description: Email 
 *              type: email
 *              example: franco@nothing.com
 *            password:
 *              description: Password
 *              type: password
 *              example: franco111
 *    responses:
 *      201:
 *       description: User logged in
 *      401:
 *       description: Usuario not logged
 *      
 */


/**
 * @swagger
 * /products/{id}:
 *  get:
 *    tags: [Products]
 *    summary: Productos
 *    description: List of products
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id of user.
 *         schema:
 *           type: integer
 *    responses:
 *       200:
 *         description: List of products
 */

/**
 * @swagger
 * /products/{id}:
 *  post:
 *    tags: [Products]
 *    summary: Productos.
 *    description : Create product.
 *    consumes:
 *      - application/json
 *    parameters:
*      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id user
 *      - in: body
 *        name: products
 *        description: product to create
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - price
 *          properties:
 *            name:
 *              description: Name of the product
 *              type: string
 *              example: Hot Dog
 *            price:
 *              description: Price of the product
 *              type: string
 *              example: 250
 *    responses:
 *      201:
 *       description: Product created
 *      401:
 *       description: Error
 *      
 */

/**
 * @swagger
 * /products/{id}/{idProduct}:
 *  put:
 *    tags: [Products]
 *    summary: Modificación de producto segun ID.
 *    description : Modificación de producto segun ID.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: id user
 *      - name: idProduct
 *        in: path
 *        description: id of the product that need to be updated
 *        required: true
 *        type: integer
 *      - in: body
 *        name: Productos
 *        description: .
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            name:
 *              description: Name of the product
 *              type: string
 *            price:
 *              description: Price of the product 
 *              type: string
 *    responses:
 *      201:
 *       description: Product added
 *      
 */

/**
 * @swagger
 * /products/{id}/{idProduct}:
 *  delete:
 *    description: Delete product
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: id od user
 *      - in: path
 *        name: idProduct
 *        schema:
 *        type: integer
 *        required: true
 *        description: id of the product that need to be deleted
 *    responses:
 *      201:
 *       description: Product deleted
 *      401:
 *       description: Error
 *    
 */


/**
 * @swagger
 *
 * /order/{id}:
 *   post:
 *    description: Make an order
 *    tags: [Orders]
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: id user
 *    - in: body
 *      name: orders
 *      required: false
 *      description : Create order
 *      schema:
 *                  type: object
 *                  properties:
 *                    order:
 *                      type: array
 *                      items:
 *                            type: object
 *                            properties:
 *                                  product:
 *                                    type: string
 *                                  amount: 
 *                                    type: number
 *                    payMeth: 
 *                        type: string
 *                    address: 
 *                        type: string
 *    responses:
 *      200:
 *        Sucess
 * 
 * /order/history/{id}:
 *  get:
 *    description: See history of user
 *    tags: [Orders] 
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id user
 *    responses:
 *      200:
 *        Sucess
 *
 * /allOrders/{id}:
 *  get:
 *    description: See all orders
 *    tags: [Orders] 
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: id of user
 *    responses:
 *      200:
 *        Sucess
 */

/**
 * @swagger
 * /order/{id}/{idOrder}:
 *  put:
 *    description: Modify conditions
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: id of user
 *      - in: path
 *        name: idOrder
 *        required: true
 *        description: id of order
 *        schema:
 *          type: integer
 *      - name: newCondition
 *        type: string
 *        in: formData
 *        required: true
 *        description: New condition
 *    responses:
 *      200:
 *        Sucess
 * 
 */



