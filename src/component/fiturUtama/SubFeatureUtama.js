import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class SubFeatureUtama extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonSubFeatureUtama}>
                <View>
                    <Image style={styles.FeatureUtamaIcon} source={this.props.Image} />
                    <Text style={styles.FeatureUtamaText}>{this.props.Title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SubFeatureUtama;

const styles = StyleSheet.create({
    buttonSubFeatureUtama: {
        borderRadius: 10,
        overflow: 'hidden',
        shadowOpacity: 100,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 7.50,
        elevation: 1,
        width: '20%',
        marginHorizontal: 2,
        marginBottom: 15,
        alignItems: 'center',
    },
    FeatureUtamaIcon: {
        height: 60,
        width: 60,
    },
    FeatureUtamaText: {
        textAlign: 'center',
        marginTop: 5,
    },
});
