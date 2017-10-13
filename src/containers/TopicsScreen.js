import React, {Component} from 'react';
import {connect} from 'react-redux';
import '.TopicsScreen.css';

class TopicsScreen extends Component {
  componentDidMount() {
    this.props.dispatch(topicsActions.fetchTopics());
  }
  render() {
    return (
      <h2>Where are my Topics</h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    rowsById: topicsSelectors.getTopicsByUrl(state),
    rowsIdArray: topicsSelectors.getTopicsByUrlArray(state)
  };
}

export default connect(mapStateToProps)(TopicsScreen);
