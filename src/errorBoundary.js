import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorInfo });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) { return <h1> oopsy something went wrong </h1>; }
    return this.props.children;
  }
}
