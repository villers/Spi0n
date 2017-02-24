import React, { PropTypes } from 'react';
import { View, ListView, RefreshControl } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import RowListView from './RowListView';

export default class FirstScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loadMoreContentAsync = this.loadMoreContentAsync.bind(this);
  }

  componentWillMount() {
    this.page = 1;
    this.props.fetchData('https://www.spi0n.com/wp-json/nq/v1/home');
  }

  loadMoreContentAsync() {
    this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/home?page=${this.page += 1}`);
  }

  render() {
    const { dataSource, isLoading, isRefreshing, fetchData, refresh } = this.props;

    return (
      <View>
        <ListView
          renderScrollComponent={props => <InfiniteScrollView {...props} />}
          dataSource={dataSource}
          renderRow={rowData => <RowListView item={rowData} />}
          enableEmptySections
          refreshControl={<RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              refresh();
              fetchData('https://www.spi0n.com/wp-json/nq/v1/home');
            }}
          />}
          canLoadMore={!isRefreshing && !isLoading}
          onLoadMoreAsync={this.loadMoreContentAsync}
        />
      </View>
    );
  }
}

FirstScreen.propTypes = {
  fetchData: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,

  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  dataSource: PropTypes.shape({}).isRequired,
};
