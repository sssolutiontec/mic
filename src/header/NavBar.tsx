import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <>
      <div>
        <div id='logo'>
          <div>logo</div>
          <div>mic</div>
          <div>Maternity intensive care</div>
        </div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Find Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Donations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">Expenses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">Partners</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-7">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-8">Tools</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button size='sm'>Donate now</Button>
      </div>
    </>
  );
}

export default NavBar;