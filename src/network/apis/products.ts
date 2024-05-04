import { AxiosResponse } from "axios";
import { get } from "../index";

const getAllCategories = async (): Promise<AxiosResponse<any>> => {
  return await get("/products/categories");
};

const getCategoryProducts = async ({
  category,
}: {
  category: string;
}): Promise<AxiosResponse<any>> => {
  return await get(`/products/category/${category}`);
};

export { getAllCategories, getCategoryProducts };
