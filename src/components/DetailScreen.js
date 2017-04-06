import React, { PropTypes } from 'react';
import { WebView, Platform, InteractionManager, StatusBar } from 'react-native';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Spinner, Title } from 'native-base';
import HTMLView from 'react-native-htmlview';
import { Actions } from 'react-native-router-flux';


class DetailScreen extends React.PureComponent {

  componentDidMount() {
    const { id } = this.props;

    this.loaded = false;

    InteractionManager.runAfterInteractions(() => {
      this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/post/${id}`);
      this.loaded = true;
    });
  }

  isLoading() {
    const { isLoading } = this.props;

    return !this.loaded || isLoading;
  }

  photo() {
    const { item } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{item.post_title}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <HTMLView value={item.post_content} />
        </Content>
      </Container>
    );
  }

  video() {
    const { item } = this.props;
    const startInLoadingState = Platform.OS !== 'ios';

    let videoUrl;
    if (item.url_youtube !== false) {
      videoUrl = `https://www.youtube.com/embed/${item.url_youtube}?autoplay=1`;
    } else if (item.url_dailymotion !== false) {
      videoUrl = `https://www.dailymotion.com/embed/video/${item.url_dailymotion}?wmode=transparent&autoplay=1`;
    } else {
      return this.photo();
    }
    return (
      <Container>
        <StatusBar hidden />
        <WebView
          source={{ uri: videoUrl }}
          startInLoadingState={startInLoadingState}
          allowsInlineMediaPlayback
        />
      </Container>
    );
  }

  render() {
    const { item } = this.props;

    if (this.isLoading()) {
      return <Spinner />;
    }

    if (item.article_type === 'photo') {
      return this.photo();
    }

    return this.video();
  }
}

DetailScreen.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,

  fetchData: PropTypes.func.isRequired,
};

export default DetailScreen;
