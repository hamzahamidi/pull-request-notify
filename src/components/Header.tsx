import * as React from "react";
import { Link } from 'react-router-dom';
import { Nav, NavItem } from "reactstrap";

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <div className="container">
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/settings" className="nav-link">
            settings
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};
