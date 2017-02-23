import React, {PropTypes} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import NavButton from './NavButton';

export default class FirstScreen extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        let { onButtonPress, hasErrored, isLoading, items } = this.props;

        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>First Screen</Text>
                {hasErrored && (
                    <Text>Sorry! There was an error loading the items</Text>
                )}

                {isLoading && (
                    <Text>Loading</Text>
                )}
                <ScrollView>
                    {!hasErrored && items.map((item) => {
                        return (
                            <View key={item.id}>
                                <Text>{item.label}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
                <NavButton destLabel="Second" buttonHandler={ onButtonPress } />
            </View>
        );
    }
}

FirstScreen.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F9CB2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 30
    }
});