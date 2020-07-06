import React, { useState } from 'react';
import Comp from './ErroringComp.jsx';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(err) {
    console.log('caught the error');
    this.setState({ hasError: true, error: err });
  }

  render() {
    console.log('rendering error boundary');

    return this.state.hasError ? <div> Wrapped: {this.state.error.toString()} </div> : this.props.children;
  }
}

export default () => {
  return (
    <ErrorBoundary>
      <Comp />
    </ErrorBoundary>
  );
};
