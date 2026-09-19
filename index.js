/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import ProfileCard from './src/components/ProfileCard';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ProfileCard', () => ProfileCard);
