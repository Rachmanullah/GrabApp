import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Account extends Component {
    _isLogout = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={this._isLogout}
                    style={{
                        backgroundColor: 'red',
                        height: 40,
                        width: 100,
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Account;


const styles = StyleSheet.create({

});


