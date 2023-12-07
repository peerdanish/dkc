import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import classes from "./L1Bar.module.css";
import logo from "../../assets/top_logo.png";
import routes from "../../configs/appRoutes.json";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Settings } from "./components/Settings/Settings";
import { BrowserRouter as Router } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export const L1Bar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(true);

  const handleStateChange = (state) => setIsOpen(state.isOpen);

  useEffect(() => {
    const updateWindowWidth = () => {
      const isMobile = window.innerWidth <= 498;
      setHamburgerIcon(isMobile);
      setIsOpen(isMobile ? isOpen : false);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [isOpen]);

  const hamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes["l1bar-wrapper"]}>
      <div className={classes["main-logo-container"]}>
        <img src={logo} alt="main-logo" />
      </div>
      <Router>
        {hamburgerIcon ? (
          <div className={classes["slide-menu"]}>
            <div className={classes.hamburger} onClick={hamburgerClick}>
              {hamburgerIcon && !isOpen ? (
                <GiHamburgerMenu size={"3rem"} />
              ) : null}
              {isOpen && <RxCross1 size={"3rem"} onClick={hamburgerClick} />}
            </div>
            <Menu
              isOpen={isOpen}
              onStateChange={handleStateChange}
              width={"100%"}
              right
            >
              <div className={classes["navbar-container-mobile"]}>
                <div className={classes["secondary-navbar-options-mobile"]}>
                  <div className={classes["search-wrapper-mobile"]}>
                    <SearchBar />
                  </div>
                </div>

                <ul className={classes["navbar-list-mobile"]}>
                  {routes.map((route) => (
                    <li key={route.id} className={classes["navbar-item"]}>
                      <Link to={route.path} onClick={closeMenu}>
                        {route.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={classes["settings-mobile"]}>
                  <Settings onClose={closeMenu} />
                </div>
              </div>
            </Menu>
          </div>
        ) : null}

        <div className={classes["navbar-container"]}>
          <div className={classes["secondary-navbar-options"]}>
            <div className={classes["search-wrapper"]}>
              <SearchBar />
            </div>
            <div>
              <Settings />
            </div>
          </div>
          <ul className={classes["navbar-list"]}>
            {routes.map((route) => (
              <li key={route.id} className={classes["navbar-item"]}>
                <Link to={route.path} onClick={closeMenu}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Router>
    </div>
  );
};
