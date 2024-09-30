import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Initializing state.');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Syncing state with props.');
    if (nextProps.initialCount !== prevState.count) {
      return { count: nextProps.initialCount };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted.');
    this.timerID = setInterval(() => this.setState((prevState) => ({ count: prevState.count + 1 })), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding to re-render.');
    return nextState.count % 2 === 0; // Only re-render if count is even
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturing snapshot before update.');
    return prevState.count; // Return previous count
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate: Component has updated. Previous count: ${snapshot}`);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount.');
    clearInterval(this.timerID); // Clear the timer
  }

  render() {
    console.log('Render: Rendering component.');
    return <div>Count: {this.state.count}</div>;
  }
}

export default LifecycleDemo;
