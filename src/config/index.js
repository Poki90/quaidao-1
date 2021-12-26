import React, {createContext} from 'react';
import Github from 'assets/images/footer/Github.png'
import LinkedIn from 'assets/images/footer/LinkedIN_white.png'
import Telegram from 'assets/images/footer/logos_telegram.png'
import Medium from 'assets/images/footer/Medium_white.png'
import Twitter from 'assets/images/footer/akar-icons_twitter-fill.png'
import Discord from 'assets/images/footer/logos_discord.png'

export const DEFI_PROJECTS = '/DeFi_Projects';
export const MAIN_PAGE = '/';

export const DataContext = createContext([]);

export const ENABLE_DEBUG_LOG = false;

export const socialsLinks = [
  {
    url: 'dasdsafs',
    title: 'Github',
    icon: Github,
  },
  {
    url: 'dasdsafs',
    title: 'LinkedIn',
    icon: LinkedIn,
  },
  {
    url: 'dasdsafs',
    title: 'Telegram',
    icon: Telegram,
  },
  {
    url: 'dasdsafs',
    title: 'Medium',
    icon: Medium,
  },
  {
    url: 'dasdsafs',
    title: 'Twitter',
    icon: Twitter,
  },
  {
    url: 'dasdsafs',
    title: 'Twitter',
    icon: Discord,
  },
];

export const menuLinks = [
  {
    target: true,
    href: 'https://ambrosus.io/',
    title: 'Main',
    route: false,
  },
  {
    target: true,
    href: 'https://explorer.ambrosus.io/',
    title: 'Explorer',
    route: false,
  },
  {
    target: false,
    href: MAIN_PAGE,
    title: 'DeFiProjects',
    route: true,
  },
  {
    target: true,
    href: 'https://amb.to/',
    title: 'amb.to',
    route: false,
  },
];


export default {
  socialsLinks,
  menuLinks,
  DeFi_Projects: DEFI_PROJECTS,
  MAIN_PAGE,
  DataContext,
};
