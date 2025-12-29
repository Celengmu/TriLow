import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaHome, FaShoppingCart, FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function AppNavbar() {
  const { cart } = useCart();

  return (
    <Navbar bg="light" fixed="bottom" className="d-md-none">
      <Container className="justify-content-around">
        <Nav>
          <Nav.Link as={Link} to="/"><FaHome size={22} /></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/keranjang">
            <FaShoppingCart size={22} />
            {cart.length > 0 && <Badge bg="danger">{cart.length}</Badge>}
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/pembayaran"><FaMoneyBill size={22} /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}