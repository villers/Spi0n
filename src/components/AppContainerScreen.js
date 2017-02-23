import React, {PropTypes} from 'react';
import {NavigationExperimental, StyleSheet, BackAndroid, Platform} from 'react-native';
import { dispatch } from "redux";

import First from '../containers/First';
import Second from '../containers/Second';
import Third from '../containers/Third';
import Modal from '../containers/Modal';

const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader
} = NavigationExperimental;

export default class AppContainer extends React.Component {

    constructor() {
        super();

        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => {
                this.props.backAction();
                return true;
            });
        }
    }

    render() {
        let { navigationState, backAction } = this.props;

        return (
            <NavigationCardStack
                navigationState={ navigationState }
                onNavigateBack={ backAction }
                style={ styles.container }
                direction={ navigationState.routes[navigationState.index].key === 'Modal' ? 'vertical' : 'horizontal' }
                renderHeader={ props => (
					<NavigationHeader
						{ ...props }
						onNavigateBack={ backAction }
						renderTitleComponent={ props => {
							return <NavigationHeader.Title>{ props.scene.route.title }</NavigationHeader.Title>
						}}
					/>
				)}
                renderScene={ this._renderScene }
            />
        );
    }

    _renderScene({ scene }) {
        const { route } = scene;

        switch(route.key) {
            case 'First':
                return <First />;
            case 'Second':
                return <Second />;
            case 'Third':
                return <Third />;
            case 'Modal':
                return <Modal />;
        }
    }
}

AppContainer.propTypes = {
    navigationState: PropTypes.object,
    backAction: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});