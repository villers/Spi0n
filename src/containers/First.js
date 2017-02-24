import { connect } from 'react-redux';

import FirstScreen from '../components/FirstScreen';
import { navigatePush } from '../actions/navigate';
import { itemsFetchData } from '../actions/items';
import {ListView} from "react-native";

const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2),
});

const mapStateToProps = (state) => {
	return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        dataSource: dataSource.cloneWithRows(state.items)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: (item) => dispatch(navigatePush('Second')),
        fetchData: (url, append) => dispatch(itemsFetchData(url, append)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FirstScreen);