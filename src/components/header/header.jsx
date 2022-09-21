import './header.css';


function Header() {
  return (
    <div className="Header">
        <img src="icons/paleta.svg" alt="paleta" className='Header-icon' />
        <h1 className='Header-title'>Color palette generator</h1>
    </div>
  );
}

export default Header;
