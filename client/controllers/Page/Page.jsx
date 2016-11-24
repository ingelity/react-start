import React from 'react';
import { deepRed500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './PageStyles.scss';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepRed500,
  },
});

class Page extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={styles.container}>
          <div className={styles.contents}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Page;
