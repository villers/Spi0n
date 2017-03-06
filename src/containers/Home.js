import { connect } from 'react-redux';

import { itemsFetchData } from '../actions/items';
import HomeScreen from '../components/HomeScreen';

const mapStateToProps = state => ({
  isLoading: state.itemsState.isLoading,
  items: state.itemsState.items,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
