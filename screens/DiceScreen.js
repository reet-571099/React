import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";


export default class DiceScreen extends React.Component{
  myButton = ()=>{
    var numBer = this.getRandomNumber();
    switch (numBer)
    {
      case 1:
        this.setState({
          uri:require('../assets/images/dice1.png')})
          break;
      case 2:
        this.setState({
          uri:require('../assets/images/dice2.png')})
          break;
      case 3:
        this.setState({
          uri:require('../assets/images/dice3.png')})
          break;
      case 4:
        this.setState({
          uri:require('../assets/images/dice4.png')})
          break;
      case 5:
        this.setState({
          uri:require('../assets/images/dice5.png')})
          break;
      case 6:
        this.setState({
          uri:require('../assets/images/dice6.png')})
          break;
      default:
        Alert.alert("Please try again ");


    }
  
  }
  getRandomNumber() {
    return Math.floor(Math.random()*6)+1;
  }
  constructor(props){
    super(props);
    this.state =
    {
                uri:require('../assets/images/dice1.png')
    }
    };

   

  render() { 

    return( 
    <View style={styles.container}>
      <Text style={styles.header}>Lost your dice ? , not a problem anymore !!</Text>
      <Image style={styles.img} source={this.state.uri}/>
     
      <TouchableOpacity
        onPress={this.myButton}
      >
      <Text style={styles.button}>Roll Dice !</Text>
      </TouchableOpacity>
    </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#dfd3c3"
  },
  button:{
    // shadowColor: 'rgba(0,0,0, .4)', // IOS
    // shadowOffset: { height: 1, width: 1 }, // IOS
    // shadowOpacity: 1, // IOS
    // shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 6, // Android
    fontSize:30,
    marginTop:40,
    color:"black",
    fontWeight:"bold",
    // borderWidth:2,
    padding:20,
    borderRadius:50
  },
  header:{
    fontSize:30,
    marginTop:10,
    textAlign: "center",
    color:"#595238",
    alignSelf:"flex-start"
    
  },
  img:{
    height:256,
    width:256,
    borderRadius:20,
    marginTop:40
  }
})
