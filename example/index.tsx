import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DateRangeTest from './DateRangeTest';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Card, Typography } from '@material-ui/core';
const theme = createMuiTheme();
const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: '1fr 2fr 1fr',
  },
  title: {
    margin: 'auto',
    color: 'white',
    fontSize: '2rem',
    fontFamily: theme.typography.fontFamily,
  },
  card: {
    padding: 10,
    margin: 'auto',
    overflow: 'visible',
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.title}>
          <strong>Material UI</strong> - DateRange Picker
        </div>
        <Card className={classes.card}>
          <DateRangeTest />
        </Card>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
