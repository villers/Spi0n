import { Dimensions, NavigationExperimental } from 'react-native';
import { Actions } from 'react-native-router-flux';

const screenSize = Dimensions.get('window');

const {
  Card: {
    CardStackPanResponder: NavigationCardStackPanResponder,
  },
} = NavigationExperimental;

const {
  Directions: {
    HORIZONTAL,
  },
} = NavigationCardStackPanResponder;

const getPanHandlers = (props) => {
  const { scene } = props;

  const direction = (scene.navigationState != null && scene.navigationState.direction != null)
    ? scene.navigationState.direction
    : HORIZONTAL;

  // By default, onNavigateBack() should be pop()
  // but we'll try to obtain current scene's custom onBack method
  const onNavigateBack = (scene.navigationState != null && scene.navigationState.onBack != null)
    ? scene.navigationState.onBack
    : Actions.pop;

  // Enlarge gesture response distance
  const gestureResponseDistance = direction === HORIZONTAL
    ? screenSize.width * 0.8
    : screenSize.height * 0.5;

  const customProps = Object.assign({}, props, { gestureResponseDistance, onNavigateBack });
  return direction === HORIZONTAL
    ? NavigationCardStackPanResponder.forHorizontal(customProps)
    : NavigationCardStackPanResponder.forVertical(customProps);
};

export default getPanHandlers;
