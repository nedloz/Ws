import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";
import { useState } from "react";

export default function Menu() {
  const [isAnalizesActive, setIsAnalizesActive] = useState(true);
  const [isResultsActive, setIsResultsActive] = useState(false);
  const [isPodderjkaActive, setIsPodderjkaActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const offButtons = () => {
    setIsAnalizesActive(false);
    setIsResultsActive(false);
    setIsPodderjkaActive(false);
    setIsProfileActive(false);
  }

  return (
    <View style={{
      borderTopWidth: 1,
      borderColor: '#F4F4F4',
    }}>
    <View style={styles.menubar} >
      <Pressable style={styles.menuItem}  
      onPress={() => {
        offButtons()
        setIsAnalizesActive(true);
      }}
        >
        <View style={styles.menuItemImage} >
          <Svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4 10H7C7.55228 10 8 10.4477 8 11V15C8 15.5523 7.55228 16 7 16H4" stroke={isAnalizesActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" />
            <Path d="M4 6H11V18.5C11 20.433 9.433 22 7.5 22C5.567 22 4 20.433 4 18.5V6Z" stroke={isAnalizesActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" />
            <Path d="M1.72536 6C1.34058 4.6945 1.34058 3.3055 1.72536 2H13.2746C13.6594 3.3055 13.6594 4.6945 13.2746 6H1.72536Z" stroke={isAnalizesActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" />
            <Path d="M23 13.8684C23 16.01 21.1616 18 19 18C16.8384 18 15 16.01 15 13.8684C15 12.3683 16.0337 10.6414 17.2675 9.16404C17.861 8.45343 18.4573 7.85138 18.9062 7.42652C18.9382 7.39615 18.9695 7.36672 19 7.33825C19.0305 7.36672 19.0618 7.39615 19.0938 7.42652C19.5427 7.85138 20.139 8.45343 20.7325 9.16404C21.9663 10.6414 23 12.3683 23 13.8684Z" stroke={isAnalizesActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" />
          </Svg>
        </View>
        <Text style={isAnalizesActive? [styles.menuItemText, {color: '#1A6FEE'}] : styles.menuItemText} >Анализы</Text>
      </Pressable>

      <Pressable style={styles.menuItem} 
      onPress={() => {
        offButtons()
        setIsResultsActive(true);
      }}
        >
        <View style={styles.menuItemImage} >
          <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7 23.4792V8.52083C7 7.12862 8.12862 6 9.52083 6H22.4792C23.8714 6 25 7.12862 25 8.52083V23.4792C25 24.8714 23.8714 26 22.4792 26H9.52083C8.12862 26 7 24.8714 7 23.4792Z" stroke={isResultsActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" />
            <Path d="M11 16V11H16V16H11Z" stroke={isResultsActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" stroke-linejoin="round" />
            <Path d="M20 11H21" stroke={isResultsActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" stroke-linecap="round" />
            <Path d="M20 16H21" stroke={isResultsActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" stroke-linecap="round" />
            <Path d="M11 21L21 21" stroke={isResultsActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" stroke-linecap="round" />
          </Svg>
        </View>
        <Text style={isResultsActive? [styles.menuItemText, {color: '#1A6FEE'}] : styles.menuItemText} >Результаты</Text>
      </Pressable>

      <Pressable style={styles.menuItem} 
      onPress={() => {
        offButtons()
        setIsPodderjkaActive(true);
      }}
        >
        <View style={styles.menuItemImage} >
          <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.2978 22.1175L8.2971 22.0802C8.2887 21.8555 8.20483 21.6402 8.05904 21.4691L7.2978 22.1175ZM7.44293 26L6.44363 26.0373C6.45467 26.3327 6.59578 26.608 6.82908 26.7894C7.06239 26.9708 7.36399 27.0398 7.65293 26.9777L7.44293 26ZM11.5015 25.1283L11.8792 24.2023C11.693 24.1264 11.4881 24.1083 11.2915 24.1506L11.5015 25.1283ZM26 16C26 20.883 21.6147 25 16 25V27C22.5356 27 28 22.1627 28 16H26ZM16 7C21.6147 7 26 11.117 26 16H28C28 9.83731 22.5356 5 16 5V7ZM6 16C6 11.117 10.3853 7 16 7V5C9.46441 5 4 9.83731 4 16H6ZM8.05904 21.4691C6.76058 19.9448 6 18.0486 6 16H4C4 18.56 4.95406 20.9083 6.53655 22.766L8.05904 21.4691ZM6.29849 22.1549L6.44363 26.0373L8.44224 25.9626L8.2971 22.0802L6.29849 22.1549ZM7.65293 26.9777L11.7115 26.106L11.2915 24.1506L7.23293 25.0223L7.65293 26.9777ZM16 25C14.5274 25 13.133 24.7138 11.8792 24.2023L11.1238 26.0542C12.6165 26.6631 14.2673 27 16 27V25Z" fill={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} />
            <Circle cx="11" cy="16" r="1.25" fill={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} stroke={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="0.5" />
            <Circle cx="16" cy="16" r="1.25" fill={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} stroke={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="0.5" />
            <Circle cx="21" cy="16" r="1.25" fill={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} stroke={isPodderjkaActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="0.5" />
          </Svg>
        </View>
        <Text style={isPodderjkaActive? [styles.menuItemText, {color: '#1A6FEE'}] : styles.menuItemText} >Поддержка</Text>
      </Pressable>

      <Pressable style={styles.menuItem}  
      onPress={() => {
        offButtons()
        setIsProfileActive(true);
      }}
       >
        <View style={styles.menuItemImage} >
          <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="10" r="4" stroke={isProfileActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" />
            <Path stroke={isProfileActive ? "#1A6FEE" : '#B8C1CC'} stroke-width="2" d="M24 24.25L24 24.2508C23.9999 24.251 23.9997 24.2525 23.9987 24.2555C23.9969 24.2613 23.9911 24.2775 23.974 24.3042C23.9378 24.361 23.8584 24.4538 23.7 24.5704C23.3761 24.8087 22.8406 25.0602 22.0806 25.2847C20.5729 25.7302 18.4251 26 16 26C13.5748 26 11.4271 25.7302 9.91941 25.2847C9.15941 25.0602 8.62385 24.8087 8.29998 24.5704C8.14165 24.4538 8.06222 24.361 8.02598 24.3042C8.00894 24.2775 8.00306 24.2613 8.00126 24.2555C8.00032 24.2525 8.00008 24.251 8.00005 24.2508L8 24.25C8 20.3261 11.498 17 16 17C20.502 17 24 20.3261 24 24.25Z" />
          </Svg>
        </View>
        <Text style={isProfileActive? [styles.menuItemText, {color: '#1A6FEE'}] : styles.menuItemText} >Профиль</Text>
      </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menubar: {
    height: 88,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    width: 361,
    alignSelf: 'center',

  },
  menuItem: {
    justifyContent: 'center',
  },
  menuItemImage: {
    alignSelf: 'center',
  },
  menuItemText: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    color: '#B8C1CC',

  },
})