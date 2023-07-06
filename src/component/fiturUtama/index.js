import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Bike, Car, Doctor, Food, More, Pulsa, Send, Subcribe } from '../../assets';
import SubFeatureUtama from './SubFeatureUtama';

const FiturUtama = () => {
  return (
    <View style={styles.wrappertFiturUtama}>
        <SubFeatureUtama Image={Food} Title="Food"/>
        <SubFeatureUtama Image={Bike} Title="Bike"/>
        <SubFeatureUtama Image={Car} Title="Car"/>
        <SubFeatureUtama Image={Send} Title="Delivery"/>
        <SubFeatureUtama Image={Subcribe} Title="Subscription"/>
        <SubFeatureUtama Image={Doctor} Title="Healty"/>
        <SubFeatureUtama Image={Pulsa} Title="Pulsa/Token"/>
        <SubFeatureUtama Image={More} Title="More"/>
    </View>
  );
};

export default FiturUtama;

const styles = StyleSheet.create({
  wrappertFiturUtama:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
    width: '100%',
  },
});
