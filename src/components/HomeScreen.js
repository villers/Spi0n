import React, { PropTypes } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title, Right, List } from 'native-base';

import RowListView from './RowListView';

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.loadContent = this.loadContent.bind(this);
  }

  componentDidMount() {
    this.page = 1;
    this.loadContent();
  }

  loadContent() {
    this.props.fetchData('https://www.spi0n.com/wp-json/nq/v1/home');
  }

  loadMoreContent() {
    if (!this.props.isLoading) {
      this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/home?page=${this.page += 1}`);
    }
  }

  render() {
    const { items, isLoading } = this.props;

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

        <Body>
          <List
            enableEmptySections
            dataArray={items}
            renderRow={rowData => <RowListView item={rowData} />}
            onEndReached={this.loadMoreContent}
            refreshControl={<RefreshControl
              refreshing={isLoading}
              onRefresh={this.loadContent}
            />}
          />
        </Body>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  fetchData: PropTypes.func.isRequired,

  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomeScreen;
