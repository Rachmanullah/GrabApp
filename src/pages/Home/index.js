import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    ScrollView,
} from 'react-native';
import { Awan } from '../../assets';
import { FiturUtama, OvoComponent, PromoItems } from '../../component';

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="rgba(0,0,0,0)"
                />
                <Image style={styles.header} source={Awan} />
                <Text style={styles.greetingText}>Selamat Pagi</Text>
                <View style={styles.wrapperOVO}>
                    <View style={styles.ViewTextOvo}>
                        <Text style={styles.textOvo}>Ovo Balance</Text>
                        <Text style={styles.textOvo}>Rp. 100.000</Text>
                    </View>
                    <OvoComponent/>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <FiturUtama />
                </View>
                <View style={styles.divinder}></View>
                <View style={{ marginHorizontal: 20 }}>
                    <PromoItems />
                </View>
            </ScrollView>
        );
    }
}

export default Home;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        height: 150,
        width: windowWidth,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        fontFamily: 'Bitter-SemiBoldItalic',
        alignSelf: 'center',
        top: 30,
        color: '#383838',
    },
    wrapperOVO: {
        marginHorizontal: 18,
        height: 150,
        marginTop: -70,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 10,
    },
    ViewTextOvo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 10,
    },
    textOvo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#383838',
    },
    divinder: {
        width: windowWidth,
        height: 15,
        backgroundColor: '#ededed',
        marginVertical: 15,
    }
});


