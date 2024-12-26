import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/sidebar.css";
import logo from '../assets/logo.svg';
import dropdown from '../assets/dropdown.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faCloud, faBook, faGear, faPhone, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (item) => {
    setSelected(item);
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button for smaller screens */}
      <button className="hamburger" onClick={toggleSidebar}>
      <div className="sidebar-logo">
            <img src={logo} alt="" /><p htmlFor="logo">CodeAnt AI</p>
          </div>☰
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <div className="sidebar-logo">
            <img src={logo} alt="" /><p htmlFor="logo">CodeAnt AI</p>
          </div>
          <div className="custom-dropdown">

            <select name="users" id="users" className="user-select">
              <option value="User1" className="user-option">User 1</option>
              <option value="User2" className="user-option">User 2</option>
              <option value="User3" className="user-option">User 3</option>
            </select>
            <span className="dropdown-icon"><img src={dropdown} alt="" /></span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              className={`sidebar-content ${selected === "repositories" ? "selected" : ""}`}
              onClick={() => handleSelect("repositories")}
            >
              <p><FontAwesomeIcon icon={faHouse} style={{ width: "20px", marginRight: "15px" }} />Repositories</p>
            </div>
            <div
              className={`sidebar-content ${selected === "ai-code-review" ? "selected" : ""}`}
              onClick={() => handleSelect("ai-code-review")}
            >
              <p><FontAwesomeIcon icon={faCode} style={{ width: "20px", marginRight: "15px" }} />AI Code Review</p>
            </div>
            <div
              className={`sidebar-content ${selected === "cloud-security" ? "selected" : ""}`}
              onClick={() => handleSelect("cloud-security")}
            >
              <p><FontAwesomeIcon icon={faCloud} style={{ width: "20px", marginRight: "15px" }} />Cloud Security</p>
            </div>
            <div
              className={`sidebar-content ${selected === "how-to-use" ? "selected" : ""}`}
              onClick={() => handleSelect("how-to-use")}
            >
              <p><FontAwesomeIcon icon={faBook} style={{ width: "20px", marginRight: "15px" }} />How to Use</p>
            </div>
            <div
              className={`sidebar-content ${selected === "settings" ? "selected" : ""}`}
              onClick={() => handleSelect("settings")}
            >
              <p><FontAwesomeIcon icon={faGear} style={{ width: "20px", marginRight: "15px" }} />Settings</p>
            </div>
          </div>
        </div>
        <div className="supportlogout">
          <div
            className={`sidebar-content ${selected === "support" ? "selected" : ""}`}
            onClick={() => handleSelect("support")}
          >
            <p><FontAwesomeIcon icon={faPhone} style={{ width: "20px", marginRight: "15px" }} />Support</p>
          </div>
          <div
            className={`sidebar-content ${selected === "logout" ? "selected" : ""}`}
            onClick={handleLogout}
          >
            <p><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ width: "20px", marginRight: "15px" }} />Logout</p>
          </div>
        </div>
      </aside>
      {/* Overlay for small screens */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
