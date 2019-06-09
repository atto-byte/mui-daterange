import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DateRangeTest from './DateRangeTest'
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme();

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <DateRangeTest/>
      </ThemeProvider>
      </div>
      );
    };
    
ReactDOM.render(<App />, document.getElementById('root'));
