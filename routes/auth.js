const userController = require("../controllers/user");
const router = require("express").Router();
const catchAsync = require("../utils/catchAsync");
const middleware = require("../middlewares/jwt");
const validateAuth = require("../middlewares/validate/auth");

/**
 * @openapi
 * /api/login:
 *  post:
 *      summary: login
 *      tags:
 *      - Auth
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              example: "tanhne"
 *                          password:
 *                              type: string
 *                              example: "123"
 *      responses:
 *              200:
 *                  description: success
 */
router.post("/login", validateAuth.validateLogin, catchAsync(userController.userLogin));
/**
 * @openapi
 * /api/logout:
 *  post:
 *      summary: logout
 *      tags:
 *      - Auth
 *      responses:
 *              200:
 *                  description: success
 */
router.post("/logout", middleware.verifyToken, catchAsync(userController.userLogout));
/**
 * @openapi
 * /api/refreshToken:
 *  post:
 *      summary: refresh token
 *      tags:
 *      - Auth
 *      responses:
 *              200:
 *                  description: success
 */
router.post("/refreshToken", catchAsync(userController.refreshRToken));

module.exports = router;
