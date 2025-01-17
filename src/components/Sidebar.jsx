import styled from "styled-components";
import logo from "../assets/react.png";
import { v } from "../styles/Variables";
import {
  AiOutlineLeft,
  AiOutlineRocket,
  AiOutlineSend,
  AiOutlineCalculator,
  AiOutlineSetting,
  AiOutlinePhone,
  AiOutlineHdd,
  AiOutlineRead,
  AiOutlineGlobal,
  AiOutlineCodeSandbox,
} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [openSubLinks, setOpenSubLinks] = useState(
      linksArray.reduce((acc, { label }) => {
          acc[label] = false;
          return acc;
      }, {})
  );

  const [showSubLinks, setShowSubLinks] = useState(true);

  const ModSidebaropen = () => {
      setSidebarOpen(!sidebarOpen);
  };

  const { setTheme, theme } = useContext(ThemeContext);

  const CambiarTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");  // Cambiar entre "light" y "dark"
  };

  const toggleSubLinks = (label) => {
      setShowSubLinks(true);
      setOpenSubLinks((prev) => {
          const newSubLinks = {};
          Object.keys(prev).forEach((key) => {
              newSubLinks[key] = key === label ? !prev[key] : false;
          });
          return newSubLinks;
      });
  };

  const handleLogoClick = () => {
      setShowSubLinks(false);
  };

  const handleMouseEnterSidebar = () => {
      setSidebarOpen(true);
  };

  const handleMouseLeaveSidebar = () => {
      setSidebarOpen(false);
  };

  return (
      <Container
          isOpen={sidebarOpen}
          themeUse={theme}
          onMouseEnter={handleMouseEnterSidebar}
          onMouseLeave={handleMouseLeaveSidebar}
      >
          <button className="Sidebarbutton" onClick={ModSidebaropen}>
              <AiOutlineLeft />
          </button>
          <div className="Logocontent" onClick={handleLogoClick}>
              <NavLink to="/">
                  <div className="imgcontent">
                      <img src={logo} />
                      <h2>Portafolio</h2>
                  </div>
              </NavLink>
          </div>
          {linksArray.map(({ icon, label, subLinks }) => (
              <div className="LinkContainer" key={label}>
                  <div className="Link" onClick={() => toggleSubLinks(label)}>
                      <div className="Linkicon">{icon}</div>
                      {sidebarOpen && <span>{label}</span>}
                  </div>
                  {sidebarOpen && showSubLinks && openSubLinks[label] && subLinks && (
                      <div className="SubLinksContainer">
                          {subLinks.map((subLink) => (
                              <NavLink
                                  key={subLink.label}
                                  to={subLink.to}
                                  className={({ isActive }) => `SubLinks${isActive ? ` active` : ``}`}
                              >
                                  {subLink.icon} {subLink.label}
                              </NavLink>
                          ))}
                      </div>
                  )}
              </div>
          ))}
          <Divider />
          {secondarylinksArray.map(({ icon, label, to }) => (
              <div className="SecondaryLinkContainer" key={label} onClick={() => toggleSubLinks(label)}>
                  <NavLink
                      to={to}
                      className={({ isActive }) => `Link${isActive ? ` active` : ``}`}
                  >
                      <div className="Linkicon">{icon}</div>
                      {sidebarOpen && <span>{label}</span>}
                  </NavLink>
              </div>
          ))}
          <Divider />
          <div className="input-container">
          {sidebarOpen &&
              <input className="styled-input" placeholder="Eco,Nombre,Seg..." />}
              <button className="styled-button" onClick={()=> alert("Click")}>
                  Buscar
              </button>
          </div>
          <div className="Themecontent">
              <div className="Togglecontent">
                  <div className="grid theme-container">
                      <div className="content">
                          <div className="demo">
                              <label className="switch" istheme={theme}>
                                  <input
                                      istheme={theme}
                                      type="checkbox"
                                      className="theme-swither"
                                      onClick={CambiarTheme}
                                  ></input>
                                  <span istheme={theme} className="slider round"></span>
                              </label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Container>
  );
}
//#region Data links
const linksArray = [
  {
    label: "Geografía",
    icon: <AiOutlineGlobal />,
    subLinks: [
      { label: "Niebla", to: "/niebla", icon: <AiOutlineSend />, },
      { label: "Preventivos", to: "/preventivos", icon: <AiOutlineSend />, }
    ],
  },
  {
    label: "Expansión",
    icon: <AiOutlineRocket />,
    subLinks: [
      { label: "Aperturas", to: "/aperturas", icon: <AiOutlineSend />, },
      { label: "Remodelación", to: "/remodelacion", icon: <AiOutlineSend />, },
      { label: "Cierres", to: "/cierres", icon: <AiOutlineSend />, },
      { label: "Extras", to: "/extras", icon: <AiOutlineSend />, },
    ],
  },
  {
    label: "Envios",
    icon: <AiOutlineCodeSandbox />,
    subLinks: [
      { label: "Salidas", to: "/salidas", icon: <AiOutlineCalculator />, },
      { label: "Enviado", to: "/enviado", icon: <AiOutlineSend />, }
    ],
  },
  {
    label: "Manuales",
    icon: <AiOutlineRead />,
    subLinks: [
      { label: "CCTV", to: "/cctv", icon: <AiOutlineSend />, },
      { label: "C. Acceso", to: "/controlAcceso", icon: <AiOutlineSend />, },
      { label: "Alarmas", to: "/alarmas", icon: <AiOutlineSend />, },
      { label: "Niebla", to: "/mniebla", icon: <AiOutlineSend />, },
      { label: "Cerraduras", to: "/cerraduras", icon: <AiOutlineSend />, },
    ],
  },
];
const secondarylinksArray = [
  {
    label: "Reg llamdas",
    icon: <AiOutlinePhone />,
    to: "/llamadas",
  },
  {
    label: "Base Sucusales",
    icon: <AiOutlineHdd />,
    to: "/unidad",
  },
  {
    label: "Administración",
    icon: <AiOutlineSetting />,
    to: "/administracion",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
];
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;
  width: ${({ isOpen }) => (isOpen ? '250px' : '90px')}; /* Ajusta los valores según tus necesidades */
  transition: width 0.3s;

  .Sidebarbutton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }

  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};

    .imgcontent {
      display: flex;
      img {
        max-width: 30%;
        height: auto;
        margin: ${({ isOpen }) => (isOpen ? `8px 20px` : `8px 30px;`)};
      }
      cursor: pointer;
      color: ${(props) => props.theme.text};
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(1)` : `scale(2.5)`)};
    }

    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }

  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    cursor: pointer;

    .Link {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 50px;

      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }
    }
  }

  .SecondaryLinkContainer {
    margin: 8px 0;
    padding: 0 15%;

    :hover {
      background: ${(props) => props.theme.bg3};
    }

    .Link {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 50px;

      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
      &.active span {
        color: ${(props) => props.theme.bg4};
      }
    }
  }

  .SubLinksContainer {
    padding-left: 0px;

    :hover {
      background: ${(props) => props.theme.bg2};
    }

    .SubLinks {
      display: block;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      padding: 5px 0;
      padding-left: 30px;
      font-size: 14px;

      &.active {
        color: ${(props) => props.theme.bg4};
        font-weight: bold;
        font-size: 15px;
      }
    }
  }

  
  .input-container {
    display: flex;
    align-items: center;
    margin: ${v.lgSpacing} 0;
    

    .styled-input {
      margin-left: ${v.smSpacing};
      flex: 1;
      padding: ${v.smSpacing};
      border: 1px solid ${(props) => props.theme.inputBorder};
      border-radius: 4px;
      background: ${(props) => props.theme.imputbg};
      color: ${(props) => props.theme.text};
      transition: background 0.3s, color 0.3s;
      width: 50px; 

      &:focus {
        outline: none;
        border-color: ${(props) => props.theme.buttonHoverBg};
      }
    }

    .styled-button {
      margin-left: ${v.xsmSpacing};
      padding: ${v.smSpacing} ${v.mdSpacing};
      border: none;
      border: 1px solid ${(props) => props.theme.inputBorder};
      background: ${(props) => props.theme.inputBg};
      color: ${(props) => props.theme.text};
      cursor: pointer;
      transition: background 0.3s, color 0.3s;
      width: 80px; 

      &:hover {
        background: ${(props) => props.theme.buttonHoverBg};
      }
    }
  }


  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;


    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 70px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;

      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;

        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }

        .demo {
          font-size: 32px;

          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;

            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;

              &:checked + .slider:before {
                left: 4px;
                content: "🌑";
                transform: translateX(26px);
              }
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
    themeUse === "light" ? v.lightcheckbox : v.checkbox};
              transition: 0.4s;

              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }

              &.round {
                border-radius: 34px;

                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
//#endregion
//
//punto
//Guardado