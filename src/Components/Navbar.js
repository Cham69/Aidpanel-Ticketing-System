//import './navbar.css'

function Navbar() {

    return (
        <div className='navbar'>
          <div className="brand-name"><a href="home.html">HELP DESK</a></div>
            <ul className='links-list'>
              <li><a href="howto.html">How it works</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          <div className="login-section">
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      );
}

export default Navbar;