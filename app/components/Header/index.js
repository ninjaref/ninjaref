import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import messages from './messages';


const StyledNavBar = styled(Navbar) `
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 2rem;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <header>
        <StyledNavBar color="faded" light expand="md">
          <NavbarBrand href="/">Ninja Reference</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <FormattedMessage {...messages.home} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/leaderboard">
                  <FormattedMessage {...messages.leaderboard} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/stats">
                  <FormattedMessage {...messages.stats} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contribute">
                  <FormattedMessage {...messages.contribute} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </StyledNavBar>
      </header>
    );
  }
}

export default Header;
