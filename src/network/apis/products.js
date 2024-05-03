import { get } from "../index";

const getAllCategories = async () => {
  return await get("/products/categories");
};

export { getAllCategories };

//const listCompanies = async (payload) => {
//   return await axiosInstance.get("user/companies-info", payload);
// };
