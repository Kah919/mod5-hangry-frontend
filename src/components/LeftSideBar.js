import React, { Component} from "react";
import { Link, Redirect} from "react-router-dom";
import Home from "./Home";
import CategoriesContainer from "./CategoriesContainer";
import Favorites from "./Favorites";


class LeftSideBar extends Component {
  render() {
    return(
      <div className="left-sidebar " id="sidebar-left">
        <ul>
          <li><Link to="/"><i className="fas fa-search left-sidebar-i"></i></Link></li>
          <li><Link to="/categories"><i className="fas fa-folder-open left-sidebar-i"></i></Link></li>
          <li><Link to="/favorites"><i className="far fa-heart left-sidebar-i"></i></Link></li>
          <li><Link to="/users"><i className="fas fa-user-friends left-sidebar-i"></i></Link></li>
          <li onClick={() => localStorage.removeItem("token")} ><Link to="/login"><i className="fas fa-code left-sidebar-i"></i></Link></li>
        </ul>
      </div>
    )
  }
}

export default LeftSideBar;
