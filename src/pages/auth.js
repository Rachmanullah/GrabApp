import { View, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Auth = ({ navigation }) => {
    useEffect(() => {
        const validasiSession = async () => {
            const isLogin = await AsyncStorage.getItem('session_id')
            navigation.navigate(isLogin ? 'Home' : 'Login')
        }
        validasiSession()
    }, [])
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
       <ActivityIndicator/> 
    </View>
  )
}

export default Auth