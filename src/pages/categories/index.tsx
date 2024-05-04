import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, useTheme, Grid } from "@mui/material";

import { getAllCategoriesRequest } from "../../store/products/actions";
import {} from "@mui/material";

const Categories = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  useEffect(() => {
    dispatch(getAllCategoriesRequest());
  }, []);

  return (
    <Box sx={{ padding: "3rem" }}>
      <Grid container spacing={2} sx={{ margin: "1rem 0" }}>
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
      </Grid>
    </Box>
  );
};

export default Categories;
