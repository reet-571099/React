import React ,{useState}  from 'react';
import { View, Text,TextInput, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";




const LoginScreen = props => {

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const UsernameHandler = User => {
    setUsername(User);
  };
  const PasswordHandler = Password =>{
    setPassword(Password);
  };

  return (
    <View style={styles.screen}>
      <Image source= {{uri:'https://pngimage.net/wp-content/uploads/2018/06/%D0%BD%D0%B5%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-png-6.png'}} 
      style={{width: 100, height: 120, borderRadius: 500/ 2,marginTop:50,}} /> 
      <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Username / Phone no."
            onChangeText={UsernameHandler}
            value={Username}
            
            
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={PasswordHandler}
            value={Password}
            
           
          />
        </View>
    <TouchableOpacity 
    onPress={()=>{
                props.navigation.navigate('Dashboard');
            } }>
          <LinearGradient
                colors={[ "#b6fbff",  "#83a4d4"]}
                style={styles.button1}
          >
            
          <Text 
                style={styles.text_login}>
                  Sign In
          </Text>
            </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
              onPress={()=>{
                props.navigation.navigate('Register');
            } }>
          <LinearGradient
                colors={[ "#b6fbff",  "#83a4d4"]}
                style={styles.button1}
          >
            
          <Text 
                style={styles.text_login}>
                  Forgot Password ?
          </Text>
            </LinearGradient>
                    </TouchableOpacity>
       </View>
       
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#c1d8e8"
  },
  button1 : {
    borderRadius:40,
    width:300,
    marginBottom:10,
    alignItems: 'center',
    marginTop:50
    
  },
  text_login : {
    textAlign:"center",
    padding:10,
    fontSize:23,
    fontWeight:"normal",
    color: '#fff',
  },  
  InputContainer: {
    width:"80%",
    marginTop: 30,
    position:'relative',
    
  },
  body :{
    height:50,
    fontSize: 20,
    color:"black",
    backgroundColor: "white",
    opacity:1,
    borderColor:"#b6fbff",
    borderRadius:30,
    borderWidth:2,
    paddingLeft:15
      
  }
});

export default LoginScreen;