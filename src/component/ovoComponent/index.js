import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PayIcon, Pulsa, Reward, Topup} from '../../assets';
import SubFeatureOvo from './SubFeatureOvo';

const OvoComponent = () => {
  return (
    <View style={styles.wrapperPay}>
        <SubFeatureOvo Image={PayIcon} Title="Pay"/>
        <SubFeatureOvo Image={Pulsa} Title="Pulsa"/>
        <SubFeatureOvo Image={Topup} Title="Topup"/>
        <SubFeatureOvo Image={Reward} Title="Reward"/>
    </View>
  );
};

export default OvoComponent;

const styles = StyleSheet.create({
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
