import React, {PropTypes} from 'react';
import {View, Text, StyleSheet, ListView, ViewContainer, TouchableOpacity, Image, RefreshControl} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import moment from 'moment';
import 'moment/locale/fr';

// set local moment to french
moment.locale('fr');

export default class FirstScreen extends React.Component {
    componentWillMount() {
        this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/home`);
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

    _renderRefreshControl() {
        let {isLoading, fetchData} = this.props;

        return (
            <RefreshControl
                refreshing={isLoading}
                onRefresh={() => fetchData(`https://www.spi0n.com/wp-json/nq/v1/home`)}
            />
        );
    }

    _loadMoreContentAsync = async () => {
        // In this example, we're assuming cursor-based pagination, where any
        // additional data can be accessed at this.props.listData.nextUrl.
        //
        // If nextUrl is set, that means there is more data. If nextUrl is unset,
        // then there is no existing data, and you should fetch from scratch.
       // this.props.dispatch(fetchMoreContent(this.props.listData.nextUrl));
        //this.page = this.page + 1;
        let {page} = this.props;

        this.props.fetchData(`https://www.spi0n.com/wp-json/nq/v1/home?page=${page}`, true);
    };

    render () {
        let {dataSource, isLoading} = this.props;

        return (
            <View style={{flex: 1}} >
                <ListView
                    renderScrollComponent={props => <InfiniteScrollView {...props} />}
                    dataSource={dataSource}
                    renderRow={(rowData) => this._renderItem(rowData)}
                    enableEmptySections={true}
                    refreshControl={this._renderRefreshControl()}
                    canLoadMore={true}
                    onLoadMoreAsync={this._loadMoreContentAsync.bind(this)}
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
