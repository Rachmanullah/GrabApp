import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {PayIcon, Pulsa, Reward, Topup} from '../../assets';

const OvoComponent = () => {
  return (
    <View style={styles.wrapperPay}>
      <TouchableOpacity style={styles.button}>
        <View>
          <Image style={styles.ovoFeatureImage} source={PayIcon} />
          <Text style={styles.ovoFeatureText}>Pay</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View>
          <Image style={styles.ovoFeatureImage} source={Pulsa} />
          <Text style={styles.ovoFeatureText}>Pulsa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View>
          <Image style={styles.ovoFeatureImage} source={Topup} />
          <Text style={styles.ovoFeatureText}>Topup</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View>
          <Image style={styles.ovoFeatureImage} source={Reward} />
          <Text style={styles.ovoFeatureText}>Reward</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OvoComponent;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  ovoFeatureImage: {
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
