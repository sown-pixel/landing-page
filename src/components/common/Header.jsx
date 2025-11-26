import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import WOW from "wowjs";
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  /*---------header top Sticky event----------*/
  const handleStickyHeader = () => {
    const isDesktop = window.innerWidth >= 1200;
    if (ref.current && isDesktop) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  /*---------add event scroll top----------*/
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "service":
        return { activeMenu: "service" };
      case "project":
        return { activeMenu: "project" };
      case "blog":
        return { activeMenu: "blog" };
      case "page":
        return { activeMenu: "page" };
      default:
        return { activeMenu: "" };
    }
  }

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    window.addEventListener("scroll", handleStickyHeader);
    return () => {
      window.removeEventListener("scroll", () => handleStickyHeader);
    };
  }, []);

  return (
    <>
      <header
        className={`${"header-area position_top"} ${isSticky ? "sticky" : ""}`}
        ref={ref}
      >
        <div className="site-logo">
          <div className="logo">
            <Link to={"/"} onClick={scrollTop}>
              <img
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="logo-img"
              />
            </Link>
          </div>
        </div>
        <div className="main-menu">
          <nav className={sidebar === 1 ? "main-nav slidenav" : "main-nav"}>
            <div className="mobile-menu-logo">
              <Link to={"/"} onClick={scrollTop}>
                <img
                  src={process.env.PUBLIC_URL + "img/logo-dark.svg"}
                  alt="images"
                />
              </Link>
              {/* <div className="remove" onClick={handleSidbarMenu}>
                <i className="bi bi-plus-lg" />
              </div> */}
            </div>
            <ul>
              <li>
                <NavLink
                  to={`/home`}
                  onClick={() => {
                    dispatch({ type: "homeOne" });
                    scrollTop();
                    handleSidbarMenu()
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/about`}
                  onClick={() => {
                    dispatch({ type: "about" });
                    scrollTop();
                    handleSidbarMenu()
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/service`}
                  onClick={() => {
                    dispatch({ type: "service" });
                    scrollTop();
                    handleSidbarMenu()
                  }}
                >
                  Service
                </NavLink>
                {/* <i className="bi bi-chevron-down" />
                <ul
                  className={
                    state.activeMenu === "service"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/service`}
                      onClick={scrollTop}
                    >
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Service Details
                    </NavLink>
                  </li>
                </ul> */}
              </li>
              {/* <li>
                <Link to={"#"} onClick={() => dispatch({ type: "project" })}>
                  Project
                </Link>
                <i className="bi bi-chevron-down" />
                <ul
                  className={
                    state.activeMenu === "project"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/project`}
                      onClick={scrollTop}
                    >
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/project-details`}
                      onClick={scrollTop}
                    >
                      Project Details
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              {/* <li className="has-child">
                <Link to={"#"} onClick={() => dispatch({ type: "blog" })}>
                  Blog
                </Link>
                <i className="bi bi-chevron-down" />
                <ul
                  className={
                    state.activeMenu === "blog"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/blog`}
                      onClick={scrollTop}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/blog-standard`}
                      onClick={scrollTop}
                    >
                      Blog standard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      onClick={scrollTop}
                    >
                      Blog Details
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              {/* <li className="has-child">
                <Link to={"#"} onClick={() => dispatch({ type: "page" })}>
                  Pages
                </Link>
                <i className="bi bi-chevron-down" />
                <ul
                  className={
                    state.activeMenu === "page"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/team`}
                      onClick={scrollTop}
                    >
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/pricing`}
                      onClick={scrollTop}
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/faq`}
                      onClick={scrollTop}
                    >
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/error`}
                      onClick={scrollTop}
                    >
                      Error 404
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/contact`}
                  onClick={() => {
                    dispatch({ type: "contact" });
                    scrollTop();
                    handleSidbarMenu()
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link
                  to={`${process.env.PUBLIC_URL}/contact`}
                  onClick={() => {
                    scrollTop();
                    handleSidbarMenu()
                  }}
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1" />
              <div className="line-2" />
              <Link
                to={`${process.env.PUBLIC_URL}/contact`}
                onClick={scrollTop}
              >
                We're Hiring
              </Link>
            </div>
          </div>
          <div className="mobile-menu">
            <Link
              to="#"
              onClick={handleSidbarMenu}
              className={sidebar === 1 ? "cross-btn h-active" : "cross-btn"}
            >
              <span className="cross-top" />
              <span className="cross-middle" />
              <span className="cross-bottom" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
