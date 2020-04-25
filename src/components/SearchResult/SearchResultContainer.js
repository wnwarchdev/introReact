
import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getResultsForColumns} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getResultsForColumns(state, string),
  };
};

export default connect(mapStateToProps)(SearchResult);
