import React from 'react';
import { Text } from '../../Assets/constant';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      errorInfo: info,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <div>Something is Wrong,{this.state.errorInfo.componentStack}</div>;
    }
    return this.props.children;
  }
}
