import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from "react-icons/si";
import * as GoIcons from "react-icons/go";
import * as FcIconsfrom from "react-icons/fc";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Guide',
    path: '/guide',
    icon: <SiIcons.SiFoursquarecityguide />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <GoIcons.GoCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/payment',
    icon: <GoIcons.GoCreditCard />,
    cName: 'nav-text'
  },
  
  {
    title: 'About Us',
    path: '/about',
    icon: <FcIconsfrom.FcAbout />,
    cName: 'nav-text'
  }
];