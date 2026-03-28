import { Card, Typography } from "@mui/material"

function ProductCard({ products }) {

return (
<Card>
    {products.map((product) => <Typography variant="h6" textAlign="center" key={product.id}> 
      {product.name}
      {product.price}
    </Typography>
    )}
</Card>
);
}

export default ProductCard;