import React ,{useState}from 'react';
import { View, Text, StyleSheet,ImageBackground,TextInput,Image,TouchableOpacity} from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from "expo-linear-gradient";


const img ={uri:"https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}; 



const RegistrationScreen = props => {
    const [FullName, setFullName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');



    const NameHandler = Name => {
      setFullName(Name);
    };
    const PhoneHandler = PhoneNumber => {
      setPhone(PhoneNumber);
    };
    const EmailHandler = Email => {
      setEmail(Email);
    };
    const PasswordHandler = Password =>{
      setPassword(Password);
    };
  return (

    
    <ImageBackground source={img} style={styles.header}>
      
      <Image source= {{uri:'https://pngimage.net/wp-content/uploads/2018/06/%D0%BD%D0%B5%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-png-6.png'}} 
      style={{width: 80, height: 60, borderRadius: 500/ 2,marginLeft:140,marginTop:80}} /> 
      <View style={styles.screen}>   
      
        <View style={[styles.overlay, { width: 290,height: 400,marginTop:20}]}> 
          <Text style={styles.mainTxt}>Signup</Text>
            <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Full Name"
                  onChangeText={NameHandler}
                  value={FullName}
                  placeholderTextColor={"black"}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Phone Number"
                  onChangeText={PhoneHandler}
                  value={Phone}
                  placeholderTextColor={"black"}
                  underlineColorAndroid="transparent"
                />
              </View>

            <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="E-mail Address"
                  onChangeText={EmailHandler}
                  value={Email}
                  placeholderTextColor={"black"}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={PasswordHandler}
                  value={Password}
                  placeholderTextColor={"black"}
                  underlineColorAndroid="transparent"
                />
              </View>
              <TouchableOpacity 
        style={styles.acContainer}
        onPress={()=>{
          props.navigation.navigate('Home');
          
      }} >
          <Text>
              Agree & Register
          </Text>
      </TouchableOpacity>
          </View>
    </View>
   
    <View style={styles.buttonView}>
    
        
      <TouchableOpacity 
          style={styles.fpContainer}
          onPress={()=>{
              props.navigation.navigate('Login');
          
          }}>
        <Text>
              Already have an account ? Login in here
        </Text>
      </TouchableOpacity>
        </View>  
      </ImageBackground>
     
  );
};

const styles = StyleSheet.create({
    screen: {
      // flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'rgba(0,0,0,.6)'
    },mainTxt: {
      fontSize: 40,
      marginTop: 0
    },
    gradient: {
      // flex: 1,
    },
    header: {
      height:"100%",
        // flex: 1,
      resizeMode: 'cover',
      position: 'relative',
      
      },
      buttonView:{
        width: '100%',
        // marginBottom:60,    
    },
    overlay: {
      // flex: 1,
      position:"relative",
      alignItems: 'center',
      //opacity: 0.3,
      backgroundColor: '#ffffff99',
      borderRadius:10,
      
    },  
    fpContainer: {
      marginTop: 50,
      backgroundColor:"#83a4d4cc" ,
      alignItems: 'center',
      height:40,
      padding:10
    },
    acContainer: {
      marginTop: 30,
      backgroundColor:"#3282b8cc" ,
      alignItems: 'center',
      height:40,
      padding:10
    },
    InputContainer: {
      width:"80%",
      marginTop: 30,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      position:'relative'
    },
    body :{
      fontSize: 20,
      color:"black",
      opacity:0.4,
      backgroundColor: "white",
      fontWeight: 'bold',
    }
});

export default RegistrationScreen;