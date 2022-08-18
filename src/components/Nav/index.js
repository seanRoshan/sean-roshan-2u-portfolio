import React from "react";
import { Menu, Image } from "semantic-ui-react";
import logo from "../../assets/logo.svg";

function Nav(props) {

    const { navItems, currentNavItem, setCurrentNavItem } = props;

    return (
            <Menu size='large' secondary className="application-navbar">
                <Menu.Item>
                    <Image src={logo}
                        size="tiny"
                        alt="Sean Roshan"
                        className="spin"
                    />
                </Menu.Item>
                <Menu.Item header>Sean Roshan</Menu.Item>
                {navItems.map((navItem) => (
                    <Menu.Item
                        name={navItem.name}
                        key={navItem.name}
                        active={currentNavItem.name === navItem.name}
                        onClick={() => { setCurrentNavItem(navItem) }}>
                        {navItem.title}
                    </Menu.Item>
                ))}
            </Menu>
    )
}

export default Nav;