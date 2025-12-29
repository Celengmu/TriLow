import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, setCustomer } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="p-3">Keranjang kosong</div>;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      address: e.target.address.value,
      method: e.target.method.value
    };

    setCustomer(data);
    navigate("/pembayaran");
  };

  return (
    <div className="p-3">
      <h5>Data Pemesan</h5>

      <Form onSubmit={submitHandler}>
        <Form.Control
          name="name"
          placeholder="Nama"
          required
          className="mb-2"
        />
        <Form.Control
          name="address"
          placeholder="Alamat"
          required
          className="mb-2"
        />
        <Form.Select name="method" className="mb-3">
          <option>Ambil di Tempat</option>
          <option>Diantar</option>
        </Form.Select>

        <Button type="submit" className="w-100">
          Lanjut ke Pembayaran
        </Button>
      </Form>
    </div>
  );
}