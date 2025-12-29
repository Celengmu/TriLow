import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Keranjang() {
  const { cart, updateQty, removeItem } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-3">
      <h5>Keranjang</h5>

      {cart.length === 0 && <p>Keranjang kosong</p>}

      {cart.map(item => (
        <div key={item.id} className="d-flex justify-content-between mb-2">
          <div>
            <strong>{item.name}</strong>
            <div>Rp {item.price * item.qty}</div>
          </div>

          <div>
            <Button size="sm" onClick={() => updateQty(item.id, item.qty - 1)}>-</Button>
            <span className="mx-2">{item.qty}</span>
            <Button size="sm" onClick={() => updateQty(item.id, item.qty + 1)}>+</Button>
            <Button
              size="sm"
              variant="danger"
              className="ms-2"
              onClick={() => removeItem(item.id)}
            >
              x
            </Button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <hr />
          <h6>Total: Rp {total}</h6>

          <Button
            as={Link}
            to="/checkout"
            className="w-100 mt-2"
          >
            Lanjut ke Checkout
          </Button>
        </>
      )}
    </div>
  );
}