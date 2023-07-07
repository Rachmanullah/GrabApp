import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Account, Activity, Home, Inbox, Payment } from '../../pages';
import { NavAccount, NavAccountActive, NavActivity, NavActivityActive, NavHome, NavHomeActive, NavInbox, NavInboxActive, NavPayment, NavPaymentActive } from '../../assets';

const MaterialBottom = createMaterialBottomTabNavigator();

export default class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <MaterialBottom.Navigator
                    shifting={false}
                    initialRouteName="Home"
                    barStyle={{ backgroundColor: 'white',borderWidth: 3, borderColor: 'lightgrey' }}
                    activeColor='#09AB54'
                    inactiveColor='#676767'
                >
                    <MaterialBottom.Screen name="Home" component={Home}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <View style={{ marginTop: -4 }}>
                                    {
                                        color == "#09AB54" ?
                                            <Image source={NavHomeActive} style={{ height: 30, width: 30 }} /> :
                                            <Image source={NavHome} style={{ height: 30, width: 30 }} />
                                    }
                                </View>
                            )
                        }} />
                    <MaterialBottom.Screen name="Activity" component={Activity} 
                        options={{
                            tabBarIcon: ({ color }) => (
                                <View style={{ marginTop: -4 }}>
                                    {
                                        color == "#09AB54" ?
                                            <Image source={NavActivityActive} style={{ height: 30, width: 30 }} /> :
                                            <Image source={NavActivity} style={{ height: 30, width: 30 }} />
                                    }
                                </View>
                            )
                        }}
                    />
                    <MaterialBottom.Screen name="Payment" component={Payment} 
                        options={{
                            tabBarIcon: ({ color }) => (
                                <View style={{ marginTop: -4 }}>
                                    {
                                        color == "#09AB54" ?
                                            <Image source={NavPaymentActive} style={{ height: 30, width: 30 }} /> :
                                            <Image source={NavPayment} style={{ height: 30, width: 30 }} />
                                    }
                                </View>
                            )
                        }}
                    />
                    <MaterialBottom.Screen name="Inbox" component={Inbox} 
                        options={{
                            tabBarIcon: ({ color }) => (
                                <View style={{ marginTop: -4 }}>
                                    {
                                        color == "#09AB54" ?
                                            <Image source={NavInboxActive} style={{ height: 30, width: 30 }} /> :
                                            <Image source={NavInbox} style={{ height: 30, width: 30 }} />
                                    }
                                </View>
                            ),
                            tabBarBadge: 3,
                        }}
                    />
                    <MaterialBottom.Screen name="Account" component={Account} 
                        options={{
                            tabBarIcon: ({ color }) => (
                                <View style={{ marginTop: -4 }}>
                                    {
                                        color == "#09AB54" ?
                                            <Image source={NavAccountActive} style={{ height: 30, width: 30 }} /> :
                                            <Image source={NavAccount} style={{ height: 30, width: 30 }} />
                                    }
                                </View>
                            )
                        }}
                    />
                </MaterialBottom.Navigator>
            </NavigationContainer>
        );
    }
}