import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import Brand from "../image/batubara_org.png";
import BrandMobile from "../image/batubara_org_xs.png";
import Logo from "../image/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  return (
    <header className="header-area" id="header">
      <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
        <Container>
          <div className="navbar-brand">
            <Link to="/">
              <img src={Brand} alt="Logo" className="d-none d-md-block" />
              <img src={BrandMobile} alt="Logo" className="d-block d-md-none" />
            </Link>
          </div>
          <div className={state.active ? "nav-items active" : "nav-items"}>
            <div className="sidebar-brand text-center mt-5 d-block d-xl-none">
              <Link to="/">
                <img src={Logo} alt="sidebar logo" />
              </Link>
            </div>
            <hr className="d-block d-xl-none text-center" />
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="selected"
            >
              Tentang Saya
            </NavLink>
            <NavLink
              to="/portfolio"
              className="nav-link"
              activeClassName="selected"
            >
              Portofolio
            </NavLink>
            <a
              href="mailto:alimartondi88@gmail.com"
              className="nav-link"
              activeClassName="selected"
            >
              Kontak
            </a>
          </div>
          <Burger
            onClick={() => setState({ active: !state.active })}
            active={state.active}
            burger="spin"
            color={state.active ? "white" : "black"}
            hoverOpacity={0.8}
            scale={1.2}
            style={{
              height: "20px",
              padding: "0",
              margin: "0",
            }}
          />
        </Container>
      </nav>
    </header>
  );
}

// ===On Scroll Logic===
const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
