import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class SubFeatureOvo extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonSubFeatureOvo}>
                <View>
                    <Image style={styles.ovoFeatureIcon} source={this.props.Image} />
                    <Text style={styles.ovoFeatureText}>{this.props.Title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SubFeatureOvo;

const styles = StyleSheet.create({
    buttonSubFeatureOvo: {
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    ovoFeatureIcon: {
        height: 45,
        width: 45,
        marginTop: 10,
        marginHorizontal: 5,
    },
    ovoFeatureText: {
        alignSelf: 'center',
        marginTop: 5,
    },
});
