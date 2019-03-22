import React, { Component } from 'react'
import logo from '../logo.svg';
import {Menu,Container,Image} from 'semantic-ui-react'
import {NavLink,Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <Menu fixed='top' inverted>
            <Container>
                    <Link to="/" className="header item">
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    Video On Demand
                    </Link>
                    <NavLink to="/" strict exact className="header item">Discover</NavLink>
                    <NavLink  to="/movies" strict exact className="header item">Movies</NavLink>
                    <NavLink  to="/tv-series" strict exact  className="header item">TV Series</NavLink>
            </Container>
        </Menu>
    )
  }
}

export default Header
