import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, WebView, Platform, InteractionManager } from 'react-native';
import { Spinner } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', borderWidth: 0, height: 240,
  },
  padding: {
    paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10,
  },
  background: {
    padding: 5, backgroundColor: '#000000',
  },
  text: {
    fontFamily: 'Roboto', color: '#fff', fontWeight: 'bold', fontSize: 11,
  },
});

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

  render() {
    const { item } = this.props;
    const startInLoadingState = Platform.OS !== 'ios';

    const videoUrl = `https://www.dailymotion.com/embed/video/${item.url_dailymotion}?wmode=transparent&autoplay=1`;

    if (this.isLoading()) {
      return <Spinner />;
    }

    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: videoUrl }}
          allowsInlineMediaPlayback
          startInLoadingState={startInLoadingState}
        />
        <View style={styles.padding}>
          <View style={styles.background}>
            <Text style={styles.text}>{item.post_title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

DetailScreen.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,

  fetchData: PropTypes.func.isRequired,
};

export default DetailScreen;
