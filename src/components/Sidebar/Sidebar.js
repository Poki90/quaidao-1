import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { DEFI_PROJECTS } from 'config';

import ambLogo from '../../assets/svg/header-logo.svg';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOnOpen = () => {
    setOpen(() => !open);
  };

  return (
    <Menu
      noOverlay
      disableOverlayClick
      right
      onOpen={handleOnOpen}
      isOpen={open}
    >
      <div className="header-sidebar">
        <div className="logo">
          <ReactSVG src={ambLogo} />
        </div>
        <div className="close-sidebar">
LOGO HERA
        </div>
      </div>
      <a className="menu-item" target="_blank" href="https://ambrosus.io/">
        <span className="after">— 01</span>
        <p>Main</p>
      </a>
      <a
        className="menu-item"
        target="_blank"
        href="https://explorer.ambrosus.io/"
      >
        <span className="after">— 02</span>
        <p>Explorer</p>
      </a>
      <Link className="menu-item" to={DEFI_PROJECTS}>
        <span className="after">— 03</span>
        <p>Staking</p>
      </Link>
      <a className="menu-item" href="https://amb.to/" target="_blank">
        <span className="after">— 04</span>
        <p>amb.to</p>
      </a>
    </Menu>
  );
};
export default Sidebar;
