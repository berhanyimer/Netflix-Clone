import React from "react";
import "./header.css"; // Importing the CSS for the Header component
import NetflixLogo from "../../assets/images/netflix-logo.png";
// Importing the Netflix logo image
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// The Header component to render the top navigation bar
function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        {/* Left side of the header with the logo and navigation links */}

        <div className="header-left">
          <nav>
            <ul>
              {/* Netflix logo */}
              <li>
                <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              </li>
              {/* Navigation items */}
              <li>Netflix</li>
              <li>Home</li>
              <li>TVShow</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </nav>
        </div>

        {/* Right side of the header with icons */}
        <div className="header-right">
          <div className="nav-icons">
            <SearchIcon />
            <NotificationsNoneIcon />
            <AccountBoxIcon />
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
