import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
     
      <LinearGradient
          colors={["#2980b9", "#b6fbff","#ffffff"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          
            <Text 
              style={styles.text}>
                Welcome !!!
                </Text>
          
          <Text >Login TO Continue !!</Text>
          <TouchableOpacity 
              // style={styles.button1}
              onPress={()=>{
                props.navigation.navigate('Login');
            } }>
                <LinearGradient
                      colors={["#161616",  "#161616",]}
                      style={styles.button1}
                >
                <Text 
                  style={styles.text_login}>
                    Sign In 
                </Text>
                </LinearGradient>
          </TouchableOpacity> 
          <Text >Don't have an account ? Register here !</Text>
          <TouchableOpacity 
              onPress={()=>{
                props.navigation.navigate('Register');
            } }>
                <LinearGradient
                      colors={[ "#161616",  "#161616",]}
                      style={styles.button1}
                >
                 
                <Text 
                     style={styles.text_login}>
                       Register
                </Text>
                  </LinearGradient>
                          </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  );
                };

                const styles = StyleSheet.create({
                  screen: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  },
                  header: {
                    height:"auto",
                    paddingTop: 38,
                    flex: 1,
                    resizeMode:"cover"
                  },
                  text: {
                    color: '#fff',
                    fontSize: 40,
                    fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom:100

                      },
                      linearGradient: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity:0.95
                      },
                      button1 : {
                        borderRadius:40,
                        width:300,
                        marginBottom:10,
                        alignItems: 'center',
                        marginTop:10
                        
                      },
                      text_login : {
                        textAlign:"center",
                        padding:10,
                        fontSize:23,
                        fontWeight:"normal",
                        color: '#fff',
                      },
  
                    });
                    
                    export default HomeScreen;
