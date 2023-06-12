import React from 'react';

import { Menu } from 'antd';
import Link from 'next/link'

const { Item } = Menu;

const TopNav = () => {
  return (
    <Menu>
     <Item>
      <Link href="/">
        App
      </Link>
     </Item>
     <Item>
      <Link href="/login">
        Login
      </Link>
     </Item>
     <Item>
      <Link href="/register">
        Register
      </Link>
     </Item>
    </Menu>
  )
}

export default TopNav;
