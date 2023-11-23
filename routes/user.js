const userController = require("../controllers/user");
const router = require("express").Router();
const catchAsync = require("../utils/catchAsync");
const middleware = require("../middlewares/jwt");
const { validateCreateUser, validateUpdateUser } = require("../middlewares/validate/user");

/**
 * @openapi
 * /api/user:
 *  post:
 *      summary: register a new User
 *      description: register a new User
 *      tags:
 *      - User
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              example: "tanhne"
 *                          full_name:
 *                              example: "Tanh"
 *                          email:
 *                              example: "tanhtanh1505@gmail.com"
 *                          phone_number:
 *                              example: "0944150502"
 *                          image_avatar:
 *                              example: "avatar"
 *                          password:
 *                              type: string
 *                              example: "123"
 *                          date_of_birth:
 *                              example: "1/1/2002"
 *                          sex:
 *                              example: "male"
 *      responses:
 *              200:
 *                  description: success
 */
router.post("/", validateCreateUser, catchAsync(userController.createUser));

/**
 * @openapi
 * /api/user:
 *  get:
 *      summary: get profile of user
 *      tags:
 *      - User
 *      responses:
 *              200:
 *                  description: success
 */
router.get("/", middleware.verifyToken, catchAsync(userController.getCurrentUser));
/**
 * @openapi
 * /api/user:
 *  put:
 *      summary: edit profile of user
 *      description: edit profile of user
 *      tags:
 *      - User
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              example: "Tanh"
 *                          avatar:
 *                              example: "avatar"
 *                          date_of_birth:
 *                              example: "1/1/2002"
 *      responses:
 *              200:
 *                  description: success
 */
router.put("/", middleware.verifyToken, validateUpdateUser, catchAsync(userController.updateUser));

/**
 * @openapi
 * /api/user/allUser:
 *  get:
 *      summary: api test get all user
 *      tags:
 *      - User
 *      responses:
 *              200:
 *                  description: success
 */
router.get("/allUser", catchAsync(userController.getAllUsers));

module.exports = router;
