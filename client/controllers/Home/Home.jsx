import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as HomeActions from '../../actionCreators/HomeActions';
import styles from './HomeStyles.scss';

class Home extends React.Component {
  static propTypes = {
    homeData: PropTypes.object.isRequired,
    onFetchHeadline: PropTypes.func.isRequired,
  };

  state = { open: false };

  handleDialogClose = () => this.setState({ open: false });
  handleDialogOpen = () => this.setState({ open: true });
  handleFetchHeadline = () =>
    this.props.onFetchHeadline(this.props.homeData.headlineIndex);

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary
        onTouchTap={this.handleDialogClose}
      />
    );

    return (
      <div style={styles.container}>
        <Dialog
          open={this.state.open}
          title="Here's a stupid dialog"
          actions={standardActions}
          onRequestClose={this.handleDialogClose}
        >
          Well, what did you expect really.
        </Dialog>
        <h1>Home page</h1>
        <span>by Material-UI</span>
        <h2>{this.props.homeData.headline}</h2>
        <RaisedButton
          label="Show me some stupid dialog"
          primary
          className={styles.button}
          onTouchTap={this.handleDialogOpen}
        />
        <RaisedButton
          label="Get a new headline"
          secondary
          className={styles.button}
          onTouchTap={this.handleFetchHeadline}
        />
        <Link to="/not-home">
          <RaisedButton
            label="Go to some other page"
            secondary
            className={styles.button}
          />
        </Link>
      </div>
    );
  }
}

export default connect(
  store => ({
    homeData: store.homeData,
  }),
  { ...HomeActions }
)(Home);
