const express = require("express");
const colorController=require("./../controller/colorController")
const colorRoute = express.Router();

colorRoute
  .route("/")
  .get(colorController.getAllColors)
  .post(colorController.addColor)
  .patch();

colorRoute.route("/:id").get(colorController.getColor);
module.exports = colorRoute;
