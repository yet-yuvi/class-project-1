import { Card } from "../../../ui";
import "./ProductCard.css";

export function ProductCard({ product }) {

  return (
    <Card sx={{ width: 345 }}>
      <h2>{product.name}</h2>
      <p>{`TK ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>
      <p>{`Description: : ${product.description}`}</p>
    </Card>
  );
}
