import React from 'react';
import { Link } from 'react-router-dom';

import { menuLinks } from 'config';

export const Menu = () => (
  <div className="menu">
    {menuLinks.map((link) =>
      link.route ? (
        <Link to={link.href} className="menu__bold" key={link.href}>
          <p
            style={{ color: 'white', fontWeight: '500' }}
            className="active"
          >
            {link.title}
          </p>
        </Link>
      ) : (
        <a target={link.target && '_blank'} href={link.href} key={link.href}>
          <p size="xs-500">{link.title}</p>
        </a>
      ),
    )}
  </div>
);
