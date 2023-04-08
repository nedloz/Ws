import { useState } from 'react';
import { View, StyleSheet,ScrollView, Text, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-pager-view'
import Onboard from './Onboard';

export default function OnboardSwipe({onComplete}) {
  
  return (
    <View style={styles.MainContainer}>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator = {false}
            pagingEnabled = { true } >
                  <Onboard onSkip={onComplete} num={1}/>
                  <Onboard onSkip={onComplete} num={2}/>
                  <Onboard onSkip={onComplete} num={3}/>
        </ScrollView>
    </View>
 );
}

const styles = StyleSheet.create({
MainContainer :{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
},
});