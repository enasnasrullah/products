import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategoriesequest } from "../../store/products/actions";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesequest());
  }, []);
  
  return <>categories</>;
};

export default Categories;
