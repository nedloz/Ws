import { useRef, useState } from "react";
import { View, Pressable, Text, Image, StyleSheet, TextInput } from "react-native";
import { Svg, Path, G } from "react-native-svg"


export default function Email_code({onEnterEmailCode, onEmailCodeGoAuth}) {

  const [code, setCode] = useState({
    1: '', 2: '', 3: '', 4: '',
  })

  const i1 = useRef()
  const i2 = useRef()
  const i3 = useRef()
  const i4 = useRef()

  const submitEmail_code = (_code) => {
    onEnterEmailCode(_code)
  }

  const goAuth = () => [
    onEmailCodeGoAuth()
  ]

  return (
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    }} >
      <Text style={{
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 232 - 50,
      }} >Введите код из E-mail</Text>
      <View style={{
        alignItems: 'center',
        width: 240,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 16,

      }} >
        <View style={styles.box} >
          <TextInput style={styles.text} inputMode='numeric' ref={i1} maxLength={1} keyboardType='number-pad'
            onChangeText={(text) => {
              setCode({ ...code, 1: text })
              text && i2.current.focus()
            }} />
        </View>
        <View style={styles.box} >
          <TextInput style={styles.text} inputMode='numeric' ref={i2} maxLength={1} keyboardType='number-pad'
            onChangeText={(text) => {
              setCode({ ...code, 2: text })
              text ? i3.current.focus() : i1.current.focus()
            }} />
        </View>
        <View style={styles.box} >
          <TextInput style={styles.text} inputMode='numeric' ref={i3} maxLength={1} keyboardType='number-pad'
            onChangeText={(text) => {
              setCode({ ...code, 3: text })
              text ? i4.current.focus() : i2.current.focus()
            }} />
        </View>
        <View style={styles.box} >
          <TextInput style={styles.text} inputMode='numeric' ref={i4} maxLength={1} keyboardType='number-pad'
            onChangeText={(text) => {
              const _code = code[1] + code[2] + code[3] + text 
              submitEmail_code(_code)
            }} />
        </View>
      </View>
      <Text style={{
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 20,
        color: '#939396',
        textAlign: 'center',
      }} >{'Отправить код повторно можно \n будет через 59 секунд'}</Text>
      <Pressable style={{
        position: 'absolute',
        width: 32,
        height: 32,
        backgroundColor: "#F5F5F9",
        top: 18,
        left: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }} 
      onPress={goAuth}
      >
        <Svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M6.5 11L1.5 6L6.5 1" stroke="#7E7E9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EBEBEB'
  },
  text: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#F5F5F9',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center'

  }
})