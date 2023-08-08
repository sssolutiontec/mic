import './headerMessage.css'
import { Button } from 'react-bootstrap';


function HeaderMessage() {
  return (
    <>
      <div className='header-message'>
        <p>Help us to provide FREE, life-saving maternity care</p>
        <Button variant="link" size="sm">Donate now!</Button>
      </div >
    </>
  );
}

export default HeaderMessage;