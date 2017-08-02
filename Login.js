import React, {Component} from 'react';

import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
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
  TxtFont:{
    color: 'honeydew',
    fontSize: 20,
  },
  plusText:{
      left:20,
      alignItems: 'center',
      height:40,
      width:40,
      alignItems: 'center',
      // borderWidth: 1, 
      // borderColor: 'white', 
      backgroundColor: 'red'
    },
  VWcontainer2:
  {
    top:'85%',
    width:'100%', 
    left:0,
    height:60,
    // borderWidth: 1, 
    // borderColor: 'white', 
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center'
  }

});


export default class Login extends React.Component {




  render() {

    return (

              <Image style={styles.Imgcontainer} source={require('./asserts/imgpsh_fullsize.png')}>
                    <View style={styles.VWcontainer}>
                        <Text style={styles.bigWhite}>NeoSTORE</Text>
                        <View style={styles.border1}>
                              <Icon name="user" style={styles.TxtIP} color="white" />
                            <TextInput  style={styles.TxtIP} left={25} width={100} underlineColorAndroid={'transparent'} placeholderTextColor='honeydew' placeholder="Username" />
                        </View>
                        <View style={styles.border2}>
                          <Icon name="lock" style={styles.TxtIP} color="white" />
                          <TextInput  style={styles.TxtIP} left={25} width={100} underlineColorAndroid={'transparent'} placeholderTextColor='honeydew' secureTextEntry={true} placeholder="Password" />
                        </View>

                        <TouchableOpacity style={styles.BtnContainer}>
                            <Text style={styles.BtnTxt}>LOGIN</Text>
                         </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'center',top:190,height:25}} >
                         <Text style={styles.TxtFont}>Forgot Password ?</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.VWcontainer2}>
                           <Text style={styles.TxtFont} >DON'T HAVE AN ACCOUNT ?</Text>     
                            <TouchableOpacity style={styles.plusText} >
                                    <Text style={{color:'white',fontSize: 30,}}>+</Text>  
                        </TouchableOpacity>
                                        
                                         
                        </View>
                        </View> 
              </Image>




    );
  }
}
