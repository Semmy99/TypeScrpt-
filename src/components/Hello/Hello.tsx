import * as React from "react";
import { Link } from "react-router-dom";
import "./Hello.css";
import { Nav, NavItem, NavLink } from "reactstrap";

class Hello extends React.Component<any, object> {
  render() {
    return (
      <div className="hello">
        <Nav>
          <NavItem>
            <NavLink href="#">
              <Link to="/">Admin</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <Link to="/table">Admin2</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <hr />

        <div className="greeting">Hello</div>
      </div>
    );
  }
}

export default Hello;
