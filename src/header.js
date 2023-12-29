
import './style.css';
import './bootstrap/css/bootstrap.min.css'
function Header() {
  return (
    
<header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><a href="index.html">Vesperr</a></h1>
        
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li class="dropdown"><a href="10"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="10">Drop Down 1</a></li>
              <li class="dropdown"><a href="9"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="1">Deep Drop Down 1</a></li>
                  <li><a href="2">Deep Drop Down 2</a></li>
                  <li><a href="3">Deep Drop Down 3</a></li>
                  <li><a href="5">Deep Drop Down 4</a></li>
                  <li><a href="4">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="6">Drop Down 2</a></li>
              <li><a href="7">Drop Down 3</a></li>
              <li><a href="8">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
}

export default Header;
