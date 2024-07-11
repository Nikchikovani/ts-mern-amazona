import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="d-flex flex-column vh-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>TsAmazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/card" className="nav-link">
              Card
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} ml={4} lg={3}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  )
}

export default App
