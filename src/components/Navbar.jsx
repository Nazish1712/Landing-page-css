const Navbar = () => {
   return (
    <div className="navbar-root">
      <div className="logo">FinTech</div>
      <div>
         <ul className="link-list">
            <li className="link-item"><a className="link" href="#">Guide</a></li>

            <li className="link-item"><a 
            className="link" href="#">Pricing</a></li>
            <li className="link-item"
            ><a className="link" href="#">Login</a></li>
            </ul>
      </div>
      <button className="btn">Start free trial</button>
    </div>
   )
}

export default Navbar