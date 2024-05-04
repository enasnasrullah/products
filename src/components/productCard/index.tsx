import { Box, CardMedia, Typography, useTheme } from "@mui/material";
import { product } from "../../store/products/reducers";

const ProductCard = ({ product }: { product: product }) => {
  const theme = useTheme();
  return (
    <>
      <CardMedia
        component="img"
        height="300"
        image={product?.image}
        alt="Paella dish"
        sx={{
          objectFit: "contain",
          border: `1px solid ${theme.palette.grey.light}`,
        }}
      />
      <Box sx={{ padding: "1rem 3rem" }}>
        <Typography
          sx={{
            fontSize: theme.typography.h6,
            fontWeight: theme.typography.fontWeightBold,
            textTransform: "capitalize",
          }}
        >
          {product?.category}
        </Typography>
        <Typography>{product.title}</Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              paddingRight: "1rem",
            }}
          >
            Price:
          </Typography>
          <Typography sx={{ color: theme.palette.primary.main }}>
            {product.price}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ProductCard;
