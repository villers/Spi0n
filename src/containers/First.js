import { connect } from 'react-redux';

import FirstScreen from '../components/FirstScreen';
import { itemsFetchData, itemsIsRefreshing } from '../actions/items';

const mapStateToProps = state => ({
  isLoading: state.itemsState.isLoading,
  isRefreshing: state.itemsState.isRefreshing,
  items: state.itemsState.items,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  refresh: () => dispatch(itemsIsRefreshing()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstScreen);
