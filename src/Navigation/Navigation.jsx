import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Nav, NavList } from "./Navigation.styled";

const Navigation = () => {
  const Link = styled(NavLink)`
    display: block;

    text-decoration: none;
    line-height: normal;

    color: #a0a0a0;
    transition: all 250ms linear;

    &.active {
      color: #ebeaea;
    }

    &:hover {
      color: #ebeaea;
    }
  `;
  return (
    <Nav>
      <NavList>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/catalog"}>Catalog</Link>
        </li>
        <li>
          <Link to={"/favorites"}>Favorites</Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navigation;
