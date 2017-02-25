import React, { PropTypes } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title, Right, View, List } from 'native-base';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import RowListView from './RowListView';

export default class FirstScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loadMoreContentAsync = this.loadMoreContentAsync.bind(this);
  }

  componentWillMount() {
    this.page = 1;
    this.props.refresh();
    this.props.fetchData('https://www.spi0n.com/wp-json/nq/v1/home');
  }

  loadMoreContentAsync() {
    this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/home?page=${this.page += 1}`);
  }

  render() {
    const { items, isLoading, isRefreshing, fetchData, refresh } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <View>
          <List
            renderScrollComponent={props => <InfiniteScrollView {...props} />}
            dataArray={items}
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
      </Container>
    );
  }
}

FirstScreen.propTypes = {
  fetchData: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,

  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
