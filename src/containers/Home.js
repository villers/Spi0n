import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen';
import { itemsFetchData } from '../actions/items';

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
