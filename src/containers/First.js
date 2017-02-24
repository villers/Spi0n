import { connect } from 'react-redux';
import { ListView } from 'react-native';

import FirstScreen from '../components/FirstScreen';
import { itemsFetchData, itemsIsRefreshing } from '../actions/items';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.ID !== r2.ID,
});

const mapStateToProps = state => ({
  isLoading: state.itemsState.isLoading,
  isRefreshing: state.itemsState.isRefreshing,
  dataSource: dataSource.cloneWithRows(state.itemsState.items),
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  refresh: () => dispatch(itemsIsRefreshing()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstScreen);
