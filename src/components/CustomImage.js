import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';

class CustomImage extends Component {
  static navigationOptions =
  {
    header: null,
  };

  render() {
    return (
      <Image source={this.props.imageSource} style={styles.image}/>
   

    );
  }
}
export default CustomImage;

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  }
});
