import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native'
import React, {useState } from 'react'
import { TouchableRipple } from 'react-native-paper'


const Login = ({ navigation }) => {
    const [displaySosmed, setDisplaySosmed] = useState("flex")
    const [noHp, setNoHP] = useState("")
    const [actionButton, setActionButton] = useState("Or Continue With a Social Media")

    const proses = () => {
        //asumsi call API sms gateway untuk sms
        try {
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'eve.holt@reqres.in',
                    password: 'cityslicka'
                })
            })
                .then((Response) => Response.json())
                .then((Responsejson) => {
                    if (noHp.length >= 12 && noHp.length <= 13 && noHp.substr(0, 1) == '0' && !isNaN(noHp)) {
                        navigation.navigate('ValidasiOTP', { noHp, kodeOTP: 12345 })
                        setNoHP("")
                    }
                })
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#09AB54' }}>
            <StatusBar backgroundColor='#09AB54' />
            <View style={{ marginHorizontal: 10, marginTop: 100, flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 50, color: 'white', marginTop: 20, }}>Grab</Text>
                <Text style={{ fontSize: 25, color: 'white', marginTop: 80, }}>Welcome</Text>
                <Text style={{ fontSize: 15, color: 'white', marginTop: 5, }}>Enter Your Mobile Number To Continue</Text>
                <View style={styles.input}>
                    <TextInput style={{ fontSize: 25 }}
                        placeholder='Ex: 08913131343'
                        onChangeText={(noHp) => {
                            setNoHP(noHp)
                            if (noHp.length >= 12 && noHp.length <= 13 && noHp.substr(0, 1) == '0' && !isNaN(noHp)) {
                                setActionButton("Continue")
                            } else {
                                setActionButton("Or Continue With a Social Media")
                            }
                        }}
                        keyboardType='number-pad'
                        onFocus={() => setDisplaySosmed("none")}
                        onBlur={() => setDisplaySosmed("flex")}
                        value={noHp}
                    />
                </View>
            </View>
            <TouchableRipple
                style={{
                    alignItems: 'center',
                    backgroundColor: actionButton == 'Continue' ? 'cyan' : '#09AB54',
                    paddingVertical: actionButton == 'Continue' ? 15 : 0,
                }}
                onPress={() => proses()}
            >
                <Text style={{ fontSize: actionButton == 'Continue' ? 20 : 15, color: actionButton == 'Continue' ? 'black' : 'white', }}>{actionButton}</Text>
            </TouchableRipple>
            <View style={{ display: displaySosmed, height: 90, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableRipple style={{ backgroundColor: '#2166b0', width: 110, height: 50, justifyContent: 'center', elevation: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Facebook</Text>
                </TouchableRipple>
                <TouchableRipple style={{ backgroundColor: 'white', width: 110, height: 50, justifyContent: 'center', elevation: 5 }}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Google</Text>
                </TouchableRipple>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 53,
        backgroundColor: 'white',
        marginTop: 10,
    }
})