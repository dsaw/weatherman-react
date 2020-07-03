import React, {Component} from 'react';
import Error from '../../components/error/Error';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // render custom fallback UI
      return(<div class="d-flex justify-content-center">
        <Error errorMessage={'Something went wrong.. :-/'}/>
      </div>);
    }

    return this.props.children;
  }

}


export default ErrorBoundary;
