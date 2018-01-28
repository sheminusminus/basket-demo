import React from 'react';

export default function withFirebaseData(Component, db) {
  return class extends React.Component {
    render() {
      const { ...props } = this.props;
      return (
        <Component db={db} { ...props } />
      );
    }
  };
}
