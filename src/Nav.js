import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function Nav() {
  const history =useHistory();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>history.push("/all")}>ALL</Button>
          <Button color="inherit" onClick={()=>history.push("/active")}>ACTIVE</Button>
          <Button color="inherit" onClick={()=>history.push("/complete")}>COMPLETE</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
