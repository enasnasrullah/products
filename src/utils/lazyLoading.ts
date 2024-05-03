import { lazy } from "react";

const Products = lazy(() => import("../pages/products"));
const Categories = lazy(() => import("../pages/categories"));

export { Products, Categories };
