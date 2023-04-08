import { useEffect, useState } from "react";
import { View, Pressable, Text, Image, StyleSheet, TextInput } from "react-native";


export default function Auth({ onAuthSubmit }) {
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [email, setEmail] = useState('')

  const onSubmit = () => {
    onAuthSubmit(email)
  }

  const validateEmail = (e_mail) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e_mail);
  };

  const onEmailChange = (e_mail) => {
    setEmail(e_mail)
      validateEmail(e_mail) ? setEmailIsValid(true) : setEmailIsValid(false)
  }

  return (
    <View style={{
      width: 355,
      marginTop: 103 - 59,
      flexDirection: 'column'
    }} >
      <View style={{
        flexDirection: 'row',

      }} >
        <Image source={require('../assets/hello.png')} style={{
          width: 32,
          height: 32,
          marginRight: 16,
        }} />
        <Text style={{
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 28,

        }} >Добро пожаловать!</Text>
      </View>
      <Text style={{
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 20,
        marginTop: 23,
      }} >Войдите, чтобы пользоваться функциями приложения</Text>
      <View style={{
        marginTop: 64,

      }} >
        <Text style={{
          color: '#7E7E9A',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 20,
          marginBottom: 4,
        }} >Вход по E-mail</Text>
        <TextInput placeholder="example@mail.ru" style={{
          width: '100%',
          height: 48,
          backgroundColor: '#F5F5F9',
          borderRadius: 10,
          padding: 14,
          borderWidth: 1,
          borderColor: '#EBEBEB',
          marginBottom: 32,
          fontSize: 15,
          lineHeight: 20,
        }}
          inputMode='email'
          onChangeText={text => onEmailChange(text)}
        />
      </View>
      <Pressable
        style={emailIsValid ? styles.dalee : [styles.dalee, styles.daleeOff]}
        onPress={onSubmit}
        disabled={!emailIsValid}
      >
        <Text style={{
          color: '#fff',
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 24,

        }} >Далее</Text>
      </Pressable>
      <View style={{
        marginTop: 238,
      }} >
        <Text style={{
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 20,
          color: '#939396',
          marginBottom: 16,
        }} >Или войдите с помощью</Text>
        <Pressable style={{
          borderWidth: 1,
          borderColor: '#EBEBEB',
          height: 60,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <Text style={{
            fontSize: 17,
            fontWeight: 500,
            lineHeight: 24,
          }} >Войти с Яндекс</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dalee: {
    height: 56,
    width: '100%',
    backgroundColor: '#1A6FEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  daleeOff: {
    backgroundColor: "#C9D4FB"
  },
})