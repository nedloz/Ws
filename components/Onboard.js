import { View, Pressable, Text, Image, StyleSheet, Dimensions } from "react-native";

var Device_Width = Dimensions.get('window').width ;
export default function Onboard({ num = 1, onSkip}) {


  return (
    <View
      style={{
        flexDirection: 'column',
        width: Device_Width,
        
      }}
    >

      {/* <Pressable 
      onPress={onMiss}
      
      > */}
        <Text 
        onPress={() => onSkip()}
        style={{
          width: '100%',
          color: '#57A9FF',
          fontWeight: 600,
          fontSize: 20,
          lineHeight: 24,
          marginLeft: 30,
        }}
        >{num === 3 ? 'Завершить' : 'Пропустить'}</Text>
      {/* </Pressable> */}

      <Pressable style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}  >
        <Image source={require('../assets/plus.png')} />
      </Pressable>


      <View style={{
        alignSelf: 'center',
        marginTop: 200,
      }} >
        <Text style={{
          fontSize: 20, 
          fontWeight: 600, 
          lineHeight: 24,
          color: '#00B712',
          textAlign: 'center',

        }}
        >{num === 1 ? 'Анализы' : num === 2 ? 'Уведомления' : 'Мониторинг'}</Text>
        <Text style={{
          color: '#939396',
          fontWeight: 400, 
          fontSize: 14, 
          lineHeight: 20,
          marginTop: 29,
          textAlign: 'center'
        }} >{num === 1 ? 'Экспресс сбор и получение проб' : num === 2 ? 'Вы быстро узнаете о результатах' : `Наши врачи всегда наблюдают \n за вашими показателями здоровья`}</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 60, 
        width: 58, 
        justifyContent: 'space-between'

      }} >
        <View style={num === 1 ?  styles.activeDot : styles.dots} ></View>
        <View style={num === 2 ?  styles.activeDot : styles.dots} ></View>
        <View style={num === 3 ?  styles.activeDot : styles.dots} ></View>
      </View>
      <Image 
      style={{
        alignSelf: 'center',
        marginTop: 120,
      }}
      
      source={num===1 ? require('../assets/onBoard1.png') : num===2 ? require('../assets/onBoard2.png') : require('../assets/onBoard3.png')   }/>
    </View>
  )
}

const styles = StyleSheet.create({
  dots: {
    width: 14, 
    height: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#57A9FF'
  },
  activeDot: {
    width: 14, 
    height: 14,
    borderRadius: 10,
    backgroundColor: '#57A9FF',
  },
})
