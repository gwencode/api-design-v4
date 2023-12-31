import { Router } from "express";
import { body } from "express-validator";
import {
  allProducts,
  createProduct,
  deleteProduct,
  findProduct,
  updateProduct,
} from "./handlers/product";
import {
  getUpdates,
  createUpdate,
  deleteUpdate,
  findUpdate,
  updateUpdate,
} from "./handlers/update";
// import {
//   allUpdatePoints,
//   createUpdatePoint,
//   deleteUpdatePoint,
//   findUpdatePoint,
//   updateUpdatePoint,
// } from "./handlers/update_point";
import { validationError } from "./modules/validationError";

const router = Router();

// Product

router.get("/product", allProducts);
router.get("/product/:id", findProduct);

router.put(
  "/product/:id",
  body("name").optional().isString(),
  body("price").optional().isNumeric(),
  validationError,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  body("price").isNumeric(),
  validationError,
  createProduct
);

router.delete("/product/:id", deleteProduct);

// Update

router.get("/update", getUpdates);
router.get("/update/:id", findUpdate);

router.post(
  "/update",
  body("title").isString(),
  body("body").isString(),
  body("productId").isString(),
  body("version").optional().isString(),
  body("asset").optional().isString(),
  validationError,
  createUpdate
);

router.put(
  "/update/:id",
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("status").optional().isString(),
  body("version").optional().isString(),
  body("asset").optional().isString(),
  validationError,
  updateUpdate
);
router.delete("/update/:id", deleteUpdate);

// UpdatePoint -> TO DO / Optional body / Handlers

// router.get("/updatepoint", allUpdatePoints);
// router.get("/updatepoint/:id", findUpdatePoint);

// router.post(
//   "/updatepoint",
//   body("title").isString(),
//   body("body").isString(),
//   body("productId").isString(),
//   validationError,
//   createUpdatePoint
// );

// router.put(
//   "/updatepoint/:id",
//   body("name").isString(),
//   body("price").isNumeric(),
//   validationError,
//   updateUpdatePoint
// );
// router.delete("/updatepoint/:id", deleteUpdatePoint);

export default router;
