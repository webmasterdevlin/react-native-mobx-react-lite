import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TodoDetail from '../todos/screens/TodoDetail';
import TodoList from '../todos/screens/TodoList';
const MainNavigator = createStackNavigator(
  {
    todoList: {
      screen: TodoList,
      navigationOptions: () => ({
        title: 'Mobx React Lite',
      }),
    },
    todoDetail: {
      screen: TodoDetail,
    },
  },
  {
    initialRouteName: 'todoList',
  },
);
const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;
