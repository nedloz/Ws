import { useState } from "react";
import { View, Pressable, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import DropdownComponent from "./DropdownComponent";


export default function CreateCard({onSubmit}) {
  const [isFormValid, setIsformValid] = useState(false)

  const [name, setName] = useState(null)
  const [patronymic, setpPatronymic] = useState(null)
  const [surname, setSurname] = useState(null)
  const [birthday, setBirthday] = useState(null)
  const [gender, setGender] = useState(null)


  const checkIsValid = () => {
    if (name && patronymic && surname && birthday && gender && name) {
      setIsformValid(true)
    } else {
      setIsformValid(false)
    }
  }

  const onChangeGender = (gender) => {
    setGender(gender)
  }

  const onFormSubmit = () => {
    onSubmit()
  }

  return (
    <View style={{
      marginHorizontal: 20,
    }} >
      <TouchableOpacity>
        <Text style={{
          position: 'absolute',
          top: 34,
          right: 0,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 20,
          color: '#1A6FEE'
        }} >Пропустить</Text>
      </TouchableOpacity>

      <Text style={{
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 28,
        marginTop: 26,
        marginBottom: 16,
      }} >{'Создание карты \nпациента'}</Text>
      <Text style={{
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20,
        color: '#939396',
        marginBottom: 8,
      }} >Без карты пациента вы не сможете заказать анализы.</Text>
      <Text style={{
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20,
        color: '#939396',
        marginBottom: 32,
      }} >В картах пациентов будут храниться результаты анализов вас и ваших близких.</Text>

      <View  >
        <TextInput onChangeText={item => {
          setName(item)
          checkIsValid()
          }} placeholder="Имя" style={styles.input}  ></TextInput>
        <TextInput onChangeText={item => {
          setpPatronymic(item)
          checkIsValid()
          }} placeholder="Отчество" style={styles.input}  ></TextInput>
        <TextInput onChangeText={item => {
          setSurname(item)
          checkIsValid()
          }} placeholder="Фамилия" style={styles.input}  ></TextInput>
        <TextInput onChangeText={item => {
          setBirthday(item)
          checkIsValid()
          }} placeholder="Дата рождения" style={styles.input}  ></TextInput>
        <DropdownComponent onChangeGender={onChangeGender} />
      </View>

      <TouchableOpacity
        style={isFormValid ? styles.createBut : [styles.createBut, styles.createButOff]}
        onPress={onSubmit}
        disabled={!isFormValid}
      >
        <Text style={{
          color: '#fff',
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 24,

        }} >Далее</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  createBut: {
    height: 56,
    backgroundColor: '#1A6FEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButOff: {
    backgroundColor: "#C9D4FB",
  },
  input: {
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
  },
  inputActive: {
    borderColor: '#B8C1CC',
  }
})


