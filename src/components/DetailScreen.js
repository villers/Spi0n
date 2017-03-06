import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, WebView, Platform } from 'react-native';
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
    this.loadContent();
  }

  loadContent() {
    const { id } = this.props;

    this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/post/${id}`);
  }

  render() {
    const { item, isLoading } = this.props;
    const startInLoadingState = Platform.OS !== 'ios';

    const videoUrl = `https://www.dailymotion.com/embed/video/${item.url_dailymotion}?wmode=transparent&autoplay=1`;


    return (
      <View style={styles.container}>
        {isLoading ? (
          <Spinner />
        ) : (
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
        )}
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
