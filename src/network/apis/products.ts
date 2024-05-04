import { AxiosResponse } from "axios";
import { get } from "../index";

const getAllCategories = async (): Promise<AxiosResponse<any>> => {
  return await get("/products/categories");
};

export { getAllCategories };
