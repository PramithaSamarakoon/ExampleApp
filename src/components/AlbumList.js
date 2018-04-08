import React,{Component} from 'react';
import { View, Text} from 'react-native';

//const AlbumList=()=>{
class AlbumList extends Component{
  componentWillMount(){
    console.log('componentWillMount in here');

  }
  render(){
    return (
      <View>
        <Text>AlbumList!!</Text>
      </View>
    );
  }
  }

export default AlbumList;
