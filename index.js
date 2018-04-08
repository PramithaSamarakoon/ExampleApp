import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = ()=>{
  return(

    <Header headerText={'Music Albums'}/>
    //<AlbumList/>
  );

};

AppRegistry.registerComponent('albums',()=> App);
