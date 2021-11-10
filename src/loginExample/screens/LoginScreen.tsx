import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from "../../../assets/svg-1.svg";
import useToggle from '../customHooks/useToggle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Separator = () => {
    <View style={styles.separator} />
}
const LoginScreen :  React.FC = (props:any) => {

    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const { showPassword, togglePassword } = useToggle();
    const savePassword = async () => await AsyncStorage.setItem("password", password);
    const getPassword = async (): Promise<string | null> => await AsyncStorage.getItem("password")
    
    const saveUsername = async () => await AsyncStorage.setItem("username", username);
    const getUsername = async (): Promise<string | null> => await AsyncStorage.getItem("username")
    React.useEffect(() => {
        const init = async () => {
          const passwordFound = await getPassword();
          if (passwordFound) {
            setPassword(passwordFound);
            console.log(password)
          }

          const usernameFound = await getUsername();
          if(usernameFound){
              setUsername(usernameFound);
              console.log(username);
          }
        }
        init();
      }, [])

    return (
        <SafeAreaView>
            <Text>Sample Login Example</Text>
            <Logo style={styles.svgStyle} width={300} height={100}/>
            <View>
                <Text>Enter Username</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.inputStyle}
                defaultValue={username}
                onChangeText={(text)=>setUsername(text)} />
                <MaterialIcons style={styles.icon} name="verified-user" size={20} />
            </View>
            <View>
                <Text>Enter Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.inputStyle} 
                secureTextEntry={showPassword}
                defaultValue={password}
                onChangeText={(text)=>setPassword(text)}></TextInput>
                <MaterialIcons style={styles.icon} name="no-encryption" size={20} onPress={togglePassword}/>
            </View>
            <View style={styles.btnStyle}>
                <Button  title="LOGIN" color="white" onPress={async ()=>{
                    await saveUsername();
                    await savePassword();
                     const retrievedPassword = await getPassword();
                     const retrievedUsername = await getUsername();
                    if(retrievedPassword && retrievedUsername){
                     props.navigation.navigate("FirstScreen")} 
                     }}/> 
            </View>
           {/* <Separator /> */}
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      svgStyle:{
        flex: 1,
          backgroundColor:'red',
          alignItems: 'center',
            justifyContent: 'center',
      },
      inputStyle:{
          flex:1,
          backgroundColor:'white',
          fontSize:25,
          borderColor:'black',
          borderWidth:2,
          height:50,
          margin:5,
          borderRadius:15,
      },
      btnStyle:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf:"center",
            borderWidth:1,
            borderRadius:10,
            borderColor:'blue',
            backgroundColor:"blue",
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      inputContainer: {
        flexDirection: 'row',
        borderColor: '#000',
        paddingBottom: 10,
      },
      icon:{
        position: 'absolute',
        right: 10,
        top:10
      }
})
