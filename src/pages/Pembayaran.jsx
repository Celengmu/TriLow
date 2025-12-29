import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

export default function Pembayaran() {
  const { cart, customer } = useCart();

  if (!customer) {
    return <div className="p-3">Silakan isi data checkout terlebih dahulu</div>;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const kirimWhatsApp = () => {
    const items = cart
      .map(item => `${item.name} x${item.qty} = Rp ${item.price * item.qty}`)
      .join("\n");

    const message = `
🧾 NOTA PESANAN

👤 Nama: ${customer.name}
📍 Alamat: ${customer.address}
🚚 Metode: ${customer.method}

📦 Pesanan:
${items}

💰 Total: Rp ${total}

Terima kasih 🙏
`;

    window.open(
      `https://wa.me/6281229648671?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="p-3">
      <h5>Nota Pembayaran</h5>

      <Card className="mb-3">
        <Card.Body>
          <strong>Data Pemesan</strong>
          <p className="mb-1">Nama: {customer.name}</p>
          <p className="mb-1">Alamat: {customer.address}</p>
          <p>Metode: {customer.method}</p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <strong>Rincian Pesanan</strong>

          {cart.map(item => (
            <div
              key={item.id}
              className="d-flex justify-content-between"
            >
              <span>{item.name} x{item.qty}</span>
              <span>Rp {item.price * item.qty}</span>
            </div>
          ))}

          <hr />
          <div className="d-flex justify-content-between">
            <strong>Total</strong>
            <strong>Rp {total}</strong>
          </div>
        </Card.Body>
      </Card>

      <Button
        className="w-100"
        onClick={kirimWhatsApp}
      >
        Pesan via WhatsApp
      </Button>
    </div>
  );
}