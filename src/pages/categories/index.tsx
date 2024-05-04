import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, useTheme, Grid } from "@mui/material";

import { getAllCategoriesRequest } from "../../store/products/actions";
import {} from "@mui/material";
import { useSelector } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const categories = useSelector(
    (state: any) => state.productsReducer.allCategories
  );

  useEffect(() => {
    dispatch(getAllCategoriesRequest());
  }, []);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);
  return (
    <Box sx={{ padding: "3rem" }}>
      <Grid container sx={{ margin: "1rem 0" }}>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: theme.typography.h1,
            }}
          >
            Shop By Category
          </Typography>
          <Typography
            sx={{
              color: theme.palette.grey[200],
            }}
          >
            Discover the perfect products you need
          </Typography>
        </Grid>
        {categories?.map((categogry: string, index: number) => (
          <Grid
            item
            xs={1}
            key={index}
            onClick={() => {
              setSelectedCategory(categogry);
            }}
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              margin: ".5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: ".3rem",
              cursor: "pointer",
              backgroundColor:
                selectedCategory === categogry
                  ? theme.palette.primary.main
                  : "transparent",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                width: "100%",
                fontWeight: theme.typography.fontWeightMedium,
                color:
                  selectedCategory === categogry
                    ? theme.palette.grey[100]
                    : theme.palette.primary[100],
              }}
            >
              {categogry}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
