import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import Brand from "../image/web-brand1.svg";
import Logo from "../image/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const showState = () => setState(!state);
  // const activeLink = () => setActiveLink(!activeLink);
  return (
    <header className="header-area" id="header">
      <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
        <Container>
          <div className="navbar-brand">
            <img src={Brand} alt="Logo" onClick={scrollToTop} />
          </div>
          <div className={state.active ? "nav-items active" : "nav-items"}>
            <div className="sidebar-brand text-center mt-5 d-block d-sm-none">
              <img src={Logo} alt="sidebar logo" />
            </div>
            <hr className="d-block d-sm-none text-center" />
            <HashLink
              activeClass="active"
              to="about"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={showState}
            >
              Tentang Saya
            </HashLink>
            <Link
              activeClass="active"
              to="portfolio"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={showState}
            >
              Portofolio
            </Link>
            <Link
              activeClass="active"
              to="service"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={showState}
            >
              Layanan
            </Link>
            <a className="nav-link" href="/">
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
