/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PostsListsScreen from './app/PostsListsScreen.js';
import AlbumsListScreen from './app/AlbumsListScreen.js';
import AlbumDetailScreen from './app/AlbumDetailScreen.js';
import PostDetailScreen from './app/PostDetailScreen.js';
import ImageViewer from './app/ImageViewer.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const PostsScreen = ( navigation ) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Posts"
      component={PostsListsScreen}
      options={{ title: 'Posts' }}
    />
      <Stack.Screen name="Comments" component={PostDetailScreen} />
  </Stack.Navigator>
  )
}

const AlbumsScreen = ( navigation ) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Albums"
      component={AlbumsListScreen}
      options={{ title: 'Albums' }}
    />
      <Stack.Screen name="Photos" component={AlbumDetailScreen} />
      <Stack.Screen name="Photo" component={ImageViewer} />
  </Stack.Navigator>
  )
}

const App = ( ) => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostsScreen}>
        </Tab.Screen>
        <Tab.Screen name="Albums" component={AlbumsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;