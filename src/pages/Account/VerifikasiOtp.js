import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple } from 'react-native-paper'
import { useNavigation } from "@react-navigation/native";

const VerifikasiOtp = (props) => {
    const navigation = useNavigation()
    const [noHp, setNoHP] = useState(props.route.params.noHp)
    const [VerifikasiOtp] = useState(props.route.params.kodeOTP)
    const [warningError, setWarningError] = useState("")
    const [kodeOtp,setKodeOtp] = useState("")

    const proses = () => {
        if (kodeOtp.length == 5 && !isNaN(kodeOtp)) {
            console.log(VerifikasiOtp)
            console.log(kodeOtp)
            if (kodeOtp != VerifikasiOtp) {
                setWarningError("Invalid Code, Input Valid Your Code")
            }else{
                setWarningError("")
                navigation.navigate('MainApp')
            }
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 10, flex: 1, alignItems: 'center', marginTop: 20, }}>
                <Text style={{ fontSize: 15, marginTop: 5, }}>Verify your Phone Number With One-Time PIN (OTP)</Text>
                <Text style={{ fontSize: 25, marginTop: 5, fontFamily: 'TitilliumWeb-BoldItalic'}}>{noHp}</Text>
                <View style={styles.input}>
                    <TextInput style={{ fontSize: 25, borderColor: 'black', borderWidth: 2 }}
                        placeholder='Enter Your Code'
                        onChangeText={(kodeOtp) => {
                            setKodeOtp(kodeOtp)
                            if (kodeOtp.length == 5 && !isNaN(kodeOtp)) {
                                proses()
                                setWarningError("")
                            } else {
                                setWarningError("Invalid Code")
                            }
                        }}
                        keyboardType='number-pad'
                        value={kodeOtp}
                    />
                </View>
            </View>
            <View>
                <Text style={{ color:'red', fontWeight: 'bold', textAlign: 'center', marginTop: 15, fontSize: 17 }}>{warningError}</Text>
            </View>
            <TouchableRipple 
            style={{
                alignItems: 'center',
                backgroundColor: kodeOtp.length == 5 ? 'cyan' : 'grey',
                paddingVertical: 20,
            }}
            onPress={() => proses()}
            >
                <Text style={{ fontSize: 20 , color:'black' }}>Continue</Text>
            </TouchableRipple>
        </View>
    )
}

export default VerifikasiOtp

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 53,
        backgroundColor: 'white',
        marginTop: 10,
    }
})