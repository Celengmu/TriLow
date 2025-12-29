import { Card, Button, Row, Col } from "react-bootstrap";
import { foods, drinks } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addItem } = useCart();

  const renderMenu = (data) => (
    <Row>
      {data.map(item => (
        <Col xs={6} md={3} key={item.id} className="mb-3">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={item.image}
              style={{ height: "140px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="fs-6">{item.name}</Card.Title>
              <Card.Text>Rp {item.price}</Card.Text>
              <Button
                size="sm"
                className="w-100"
                onClick={() => addItem(item)}
              >
                Tambah
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="p-3">
      <h5>Makanan</h5>
      {renderMenu(foods)}

      <h5 className="mt-4">Minuman</h5>
      {renderMenu(drinks)}
    </div>
  );
}