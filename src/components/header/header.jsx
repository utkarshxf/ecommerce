import "./header.css"
import Logo from "../../images/logo.png"
function App() {
  return (
    <div className="Header">
      <div className="header_top">
        <ul className="header_top_first">
            <li>Customer Service</li>
            <li>About us</li>
        </ul>
        <ul className="header_top_second">
            <li>Sign up</li>
            <li>shopping bag</li>
        </ul>
      </div>
      <div className="logo_contai">
        <img src={Logo} alt="LOGO" className='Logo' srcset="" />
      </div>

    </div>
  );
}
export default App;