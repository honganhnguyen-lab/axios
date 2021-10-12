export const Header  = () => {
    return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#">Product</a>
                </li>
              </ul>
            </div>
        </nav>
    </header>
    )
}
export default Header;