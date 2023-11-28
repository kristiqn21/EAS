import { Link } from "react-router-dom";


export default function Header() {
    return(
        <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo"><Link to={"/"}><img src="images/rsz_1rsz_eas-bg-high-resolution-logo-black-transparent.png"/></Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">SHOP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">CONTACT US</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/register'>REGISTER</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">SIGN IN</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="search_icon"><a href="#"><img src="images/search-icon.png"/></a></div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    )
}