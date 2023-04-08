import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from "react";
const data = [
  { label: 'Мужской', value: 'Мужской' },
  { label: 'Женский', value: 'Женский' },
]

const DropdownComponent = ({onChangeGender}) => {
  const [value, setValue] = useState(null);



  return (
    <Dropdown
      style={value ? styles.dropdownActive: styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Пол"
      value={value}
      onChange={item => {
        setValue(item.value);
        onChangeGender(item.value)
      }}

    />
  );
};
export default DropdownComponent;
const styles = StyleSheet.create({
  dropdown: {
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
  placeholderStyle: {
    opacity: .5,
    fontSize: 15,
    lineHeight: 20,
  },
  selectedTextStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
  dropdownActive: {
    width: '100%',
    height: 48,
    backgroundColor: '#F5F5F9',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#B8C1CC',
    marginBottom: 32,
    fontSize: 15,
    lineHeight: 20,
  },
  containerStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  }, 


});