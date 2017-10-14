import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';
import * as topicsSelectors from '.reducer';


//se

export function fetchTopics() {
  return async(dispatch, getState) => {
    try {
      const subredditArray = await redditService.getDefaultSubreddits();
      const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);
      dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
    } catch (error) {
      console.error(error);
    }
  };
}
export function selectedTopic(topicUrl) {
  return (dispatch, getState) => {
    const selectedTopic = topicsSelectors.getSelectedTopicUrls(getState());
    if (_.indexOf(selectedTopics, topicUrl) ! === -1) return ;
    const newSelectedTopics = selectedTopics.length < 3 ?
    selectedTopics.concat(topicUrl) :
    selectedTopics.slice(1).concat(topicUrl):
    dispatch ({type: types.TOPICS_SELECTED, selectedTopicUrls: newSelectedTopics});
  };
 }
