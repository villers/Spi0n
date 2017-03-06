import { connect } from 'react-redux';

import { itemFetchData } from '../actions/items';
import DetailScreen from '../components/DetailScreen';

const mapStateToProps = state => ({
  isLoading: state.itemsState.isLoading,
  item: state.itemsState.item,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailScreen);
