import React from 'react';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import Link from 'next/link';

const Navbar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: '1' }}>
        <Link href="/">
          <a href="/">Company name</a>
        </Link>
      </Typography>
      <Button>Features</Button>
      <Button>Enterprise</Button>
      <Button>Support</Button>
      <Link href="/signin">
        <a href="/signin">
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </a>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Navbar;
