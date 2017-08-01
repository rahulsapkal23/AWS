import React, {Component} from 'react';

import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({

  Imgcontainer: {
      height:'100%',
      width:'100%',


  },
  VWcontainer: {
      alignItems: 'center',
      marginTop:20,
      marginLeft:20,
      marginRight:20,
      marginBottom:20,
      // borderColor: 'honeydew',
      // borderWidth: 1,
      backgroundColor: 'transparent',
      flex: 1,
      flexDirection: 'column',
  },
  TxtIP:{
      fontSize: 20,
      fontWeight: 'bold',
      height:20,
      left:15,
      top:10,
      color:'white'
  },
  border1: {
    borderColor: 'honeydew',
    borderWidth: 1,
    height:40,
    width:'80%',
    top:120,
    flexDirection: 'row',
  },
  border2: {
    borderColor: 'honeydew',
    borderWidth: 1,
    height:40,
    width:'80%',
    top:140,
    flexDirection: 'row',
  },
  BtnContainer: {

    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 10,
    borderRadius:5,
    alignItems: 'center',
    top:180,
    height:50,
    width:'80%',
  },
  BtnTxt: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,


  },

  bigWhite: {
    color: 'honeydew',
    fontWeight: 'bold',
    fontSize: 45,
    top:100

  },

});

class Button extends Component{
  render(){
    return(
      <View style={styles.BtnContainer}>
          <Text style={styles.BtnTxt}>LOGIN</Text>
          </View>
    );
  }
}
export default class Login extends React.Component {
  render() {

    return (

              <Image style={styles.Imgcontainer} source={require('./asserts/imgpsh_fullsize.png')}>
                    <View style={styles.VWcontainer}>
                        <Text style={styles.bigWhite}>NeoSTORE</Text>
                        <View style={styles.border1}>
                              <Icon name="user" style={styles.TxtIP} color="white" />
                            <TextInput style={styles.TxtIP} left={25} placeholderTextColor='honeydew' placeholder="Username" />
                        </View>
                        <View style={styles.border2}>
                          <Icon name="lock" style={styles.TxtIP} color="white" />
                          <TextInput style={styles.TxtIP} left={25} placeholderTextColor='honeydew' secureTextEntry={true} placeholder="Password" />
                        </View>

                        <Button/>


                        </View>
              </Image>




    );
  }
}
