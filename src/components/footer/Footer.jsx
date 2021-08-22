import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyle = makeStyles(theme => ({
  appBar : {
    top : 'auto',
    bottom : 0,
    height :'50px',
  },
}));

export default function Footer(props) {
  const style = useStyle();
  return (
    <AppBar position='fixed' style={{backgroundColor :'#38c172' }} className={style.appBar}>
    <Toolbar>
      <h3 style ={{color:'black'}}>&copy; 2021 Sukina Abu-Hammad</h3>
    </Toolbar>
  </AppBar>
  )
}
