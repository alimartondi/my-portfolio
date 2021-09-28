import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import Brand from "../image/batubara_org.svg";
import BatubaraWhite from "../image/batubara_white.svg";
import { Link } from "react-scroll";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  const open = () => setState(!open);

  return (
    <header className="header" id="header">
      <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
        <Container>
          <Link to="hero" className="navbar-brand">
            <img src={Brand} alt="Logo" />
          </Link>
          <div className={state.active ? "nav-items active" : "nav-items"}>
            <Link
              to="hero"
              className="sidebar-brand text-center mt-5 d-block d-xl-none"
              onClick={open}
            >
              <img src={BatubaraWhite} alt="sidebar logo" />
            </Link>
            <hr className="d-block d-xl-none text-center" />
            <Link
              to="service"
              spy={true}
              offset={-120}
              className="nav-link"
              onClick={open}
            >
              Ability
            </Link>
            <Link
              to="project"
              spy={true}
              offset={-160}
              className="nav-link"
              onClick={open}
            >
              Project
            </Link>
            <Link
              to="portfolio"
              spy={true}
              offset={-120}
              className="nav-link"
              onClick={open}
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-130}
              className="nav-link"
              onClick={open}
            >
              Contact
            </Link>
            <Link
              to="tools"
              spy={true}
              offset={-120}
              className="nav-link"
              onClick={open}
            >
              Skill & Tools
            </Link>
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
