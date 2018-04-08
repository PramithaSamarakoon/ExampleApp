import React from 'react';
import {Text, View} from 'react-native';

const Styles={
  textStyle:{
    fontSize:20
  },
  viewStyle:{
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.2
  },

}

const Header = (props)=> {
  return (
      <View style={Styles.viewStyle}>
          <Text style={Styles.textStyle}>{props.headerText}</Text>
      </View>
  );

};

export default Header;
