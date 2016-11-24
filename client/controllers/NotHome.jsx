import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class NotHome extends React.Component {
  render() {
    return (
      <div>
        <h1>This is not your Home</h1>
        <Link to="/">
          <RaisedButton
            label="Go to your Home"
            secondary
          />
        </Link>
      </div>
    );
  }
}

export default NotHome;
