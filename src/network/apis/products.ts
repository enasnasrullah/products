import { get } from "../index";
import { AxiosResponse } from "axios";

const getAllCategories = async (): Promise<AxiosResponse<any>> => {
  return await get("/products/categories");
};

export { getAllCategories };
