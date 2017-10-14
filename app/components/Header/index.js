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
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
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
              <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle nav caret>
                  <FormattedMessage {...messages.stats} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <FormattedMessage {...messages.seasons} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.courses} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.obstacles} />
                  </DropdownItem>
                </DropdownMenu>
              </NavDropdown>
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
