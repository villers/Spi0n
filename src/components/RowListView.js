import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import moment from 'moment';
import 'moment/locale/fr';

// set local moment to french
moment.locale('fr');

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    marginLeft: 10,
  },
  description: {
    flex: 1,
    height: 70,
    marginLeft: 10,
  },
  date: {
    flex: 1,
    height: 70,
    marginLeft: 10,
  },
});

const RowListView = ({ item }) => {
  const date = moment(item.post_date_gmt).fromNow();

  return (
    <TouchableOpacity onPress={() => Actions.second({ item })} >
      <View style={styles.row}>
        <Image source={{ uri: item.featured_image.url }} style={{ width: 120, height: 120 }} />
        <Text numberOfLines={4} style={styles.description}>{item.post_title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

RowListView.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default RowListView;
