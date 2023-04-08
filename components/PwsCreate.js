import { useEffect, useState } from "react";
import { View, Pressable, Text, Image, StyleSheet, TextInput } from "react-native";
import { Delete } from "react-native-feather";
import { Svg, Path } from "react-native-svg";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function PwsCreate({ onSubmit, onSkip }) {
  const [passCode, setPassCode] = useState('')

  let numbers = [
    { 'id': 1 },
    { 'id': 2 },
    { 'id': 3 },
    { 'id': 4 },
    { 'id': 5 },
    { 'id': 6 },
    { 'id': 7 },
    { 'id': 8 },
    { 'id': 9 },
    { 'id': 0 },
  ]

  const onPressNumber = (num) => {
    if (passCode.length < 4) {
      setPassCode(passCode + num.toString())
      if (passCode.length === 3) {
        onSubmit(passCode + num.toString())
      }
    }
  }

  const onPressDelete = () => {
    setPassCode(passCode.slice(0, -1))
  }


  return (
    <View>
      <Pressable onPress={() => { onSkip() }}  >
        <Text
          style={{
            position: 'absolute',
            top: 34,
            right: 0,
            fontSize: 15,
            fontWeight: 400,
            lineHeight: 20,
            color: '#1A6FEE'
          }}
        >Пропустить</Text>
      </Pressable>
      <Text
        style={{
          marginTop: 94,
          marginBottom: 16,
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 28,
          textAlign: 'center',
        }}
      >Создайте пароль</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 20,
          textAlign: 'center',
          color: '#939396',
          marginBottom: 56,
        }}
      >Для защиты ваших персональных данных</Text>
      <View style={styles.circlesBox} >
        <View style={passCode.length >= 1 ? styles.activeCircle : styles.circle} />
        <View style={passCode.length >= 2 ? styles.activeCircle : styles.circle} />
        <View style={passCode.length >= 3 ? styles.activeCircle : styles.circle} />
        <View style={passCode.length >= 4 ? styles.activeCircle : styles.circle} />
      </View>
      <View style={styles.numBox}  >
        {numbers.map(num => {
          return (
            <Pressable
              style={styles.number}
              key={num.id}
              onPress={() => { onPressNumber(num.id) }}>
              <Text style={styles.numberText} >{num.id}</Text>
            </Pressable>
          )
        })}
        <Pressable
          style={{
            position: 'absolute',
            bottom: 40,
            right: 23.5 + 12,
            width: 34.5,
            height: 24,
          }}
          onPress={onPressDelete}
        >
          <Image
            source={require('../assets/delete.png')}
            style={{ resizeMode: 'contain' }}
          />
        </Pressable>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  circlesBox: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 60 - 12
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1A6FEE'
  },
  activeCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1A6FEE'
  },
  numBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 288 + 24,
    height: 392 + 24,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    margin: 12,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F5F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNumber: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1A6FEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 28,
  }
})