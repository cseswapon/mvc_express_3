const express = require("express");
const productControllers = require("../../controllers/product.controller");
// const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/vieCount");
const router = express.Router();

// console.log(router);

/* router.get("/", (req, res) => {
  res.send({ message: "get product actives" });
});

router.post("/:id", (req, res) => {
  const id = req.params;
  res.send({
    message: "post request actives",
    id: id,
  });
}); */

router
  .route("/")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(productControllers.getAllProduct);

router
  .route("/:id")
  /**
   * @api {post} /tools save a tool
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(viewCount, productControllers.singleProduct);

module.exports = router;
