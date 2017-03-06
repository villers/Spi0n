import React, { PropTypes } from 'react';
import { Image } from 'react-native';
import { Text, Card, CardItem, Button, Content, Left, Right } from 'native-base';

import { Actions } from 'react-native-router-flux';

import moment from 'moment';
import 'moment/locale/fr';

// set local moment to french
moment.locale('fr');

const styles = {
  image: {
    resizeMode: 'cover',
    width: null,
    height: 200,
    flex: 1,
  },
  cardItem: {
    paddingVertical: 0,
  },
};

const RowListView = ({ item }) => {
  const date = moment(item.post_date_gmt).fromNow();
  const onPress = () => Actions.detail({ id: item.ID });

  return (
    <Content padder>
      <Card>
        <CardItem cardBody onPress={onPress}>
          <Image
            style={styles.image}
            source={{ uri: item.featured_image.url }}
          />
        </CardItem>

        <CardItem content onPress={onPress}>
          <Text>{item.post_title}</Text>
        </CardItem>

        <CardItem style={styles.cardItem} onPress={onPress}>
          <Left>
            <Button transparent>
              <Text>{item.categories[0].category_name}</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>{date}</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

RowListView.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default RowListView;
