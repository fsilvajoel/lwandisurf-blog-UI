import React from "react";

function Header({ page = "home" }) {
  return (
    <header id="fh5co-header-section" className="sticky-banner">
      <div className="container">
        {/* { this.props.children } */}
        <div className="nav-header">
          <a href="/" className="js-fh5co-nav-toggle fh5co-nav-toggle dark">
            <i></i>
          </a>
          <h1 id="fh5co-logo">
            <a href="/" title="Home">
              <img src="../images/logo.png" alt="logo" title="logo" />
            </a>
          </h1>
          {/* <!-- START #fh5co-menu-wrap --> */}
          <nav id="fh5co-menu-wrap" role="navigation">
            <ul className="sf-menu" id="fh5co-primary-menu">
              <li className={`${page === "home" ? "active" : ""}`}>
                <a href="/" title="Home">
                  Home
                </a>
              </li>
              <li className={`${page === "project" ? "active" : ""}`}>
                <a href="/project" title="Projeto">
                  Projeto
                </a>
              </li>
              <li className={`${page === "blog" ? "active" : ""}`}>
                <a href="/blog" title="Blog">
                  Blog
                </a>
              </li>
              <li className={`${page === "gallery" ? "active" : ""}`}>
                <a href="/gallery" title="Galeria">
                  Galeria
                </a>
              </li>
              <li className={`${page === "about" ? "active" : ""}`}>
                <a href="/about" title="Sobre nós">
                  Sobre nós
                </a>
              </li>
              <li className={`${page === "contact" ? "active" : ""}`}>
                <a href="/contact" title="Contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
