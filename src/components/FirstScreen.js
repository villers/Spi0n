import React, {PropTypes} from 'react';
import {View, Text, StyleSheet, ListView, ViewContainer, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';

// set local moment to french
moment.locale('fr');

export default class FirstScreen extends React.Component {
    componentDidMount() {
        this.props.fetchData('https://www.spi0n.com/wp-json/nq/v1/home?page=1');
    }

    _renderItem(item) {
        let {onButtonPress} = this.props;
        let date = moment(item.post_date_gmt).fromNow();

        return (
            <TouchableOpacity onPress={() => onButtonPress(item)} >
                <View style={styles.row}>
                    <Image source={{uri: item.featured_image.url}} style={{width: 120, height: 80}} />
                    <Text numberOfLines={4} style={styles.description}>{item.post_title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render () {
        let {dataSource} = this.props;

        return (
            <View style={{flex: 1}} >
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) => this._renderItem(rowData)}
                    enableEmptySections={true}
                />
            </View>
        );
    }
}

FirstScreen.propTypes = {
    onButtonPress: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    dataSource: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    }
});
