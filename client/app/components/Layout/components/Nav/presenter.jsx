import React from 'react';
import { render } from 'react-dom';

import { NavLinks } from '../../../../constants';

import styles from './styles.scss';

const NavLink = ({ isActive, href, onMouseUp, text = '', className = '' }) => (
  <a
    onMouseUp={onMouseUp}
    href={`#${href}`}
    className={`${className} ${isActive ? styles.active : ''}`}>
    <span>{text}</span>
  </a>
);

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeHash: '',
    };
  }

  render() {
    const { activeHash } = this.state;

    return (
      <div className={styles.navWrapper}>
        <div className={styles.nav}>
          <NavLink
            href={NavLinks.HOME}
            text="basket"
            className={styles.logo}
            isActive={activeHash.includes(NavLinks.HOME)}
            onMouseUp={() => this.setState({ activeHash: NavLinks.HOME })} />
          <NavLink
            text="Basket"
            href={NavLinks.BASKET}
            isActive={activeHash.includes(NavLinks.BASKET)}
            onMouseUp={() => this.setState({ activeHash: NavLinks.BASKET })} />
          <NavLink
            text="Lists"
            href={NavLinks.LISTS}
            isActive={activeHash.includes(NavLinks.LISTS)}
            onMouseUp={() => this.setState({ activeHash: NavLinks.LISTS })} />
          <NavLink
            text="Meals"
            href={NavLinks.MEALS}
            isActive={activeHash.includes(NavLinks.MEALS)}
            onMouseUp={() => this.setState({ activeHash: NavLinks.MEALS })} />
        </div>
      </div>
    );
  }
}

export default Nav;
