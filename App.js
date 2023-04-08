import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Onboard from './components/Onboard';
import Auth from './components/Auth';
import { useEffect, useState } from 'react';
import Email_code from './components/Email_code';
import PwsCreate from './components/PwsCreate';
import CreateCard from './components/CreateCard';
import Main from './components/Main';
import * as Api from './utils/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OnboardSwipe from './components/OnboardSwipe';
import SplashScreen from './components/SplashScreen';
import Test from './components/Test';


export default function App() {

  const [splash, setSplashLoaded] = useState(false)
  const [isPasscodeCreate, setIsPasscodeCreate] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const [authOpen, setAuthOpen] = useState(false)
  const [onboardOpen, setOnboardOpen] = useState(false)
  const [emailCodeOpen, setEmailCodeOpen] = useState(false)
  const [pwsCreateOpen, setPwsCreateOpen] = useState(false)
  const [createCardOpen, setCreateCardOpen] = useState(false)
  const [mainOpen, setMainOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashLoaded(true)
    }, 2000)
  }, [])

  // useEffect(() => {
  //   AsyncStorage.getItem('isOnboardSee')
  //     .then(res => {
  //       if (res === null || res == 'false') {
  //         setOnboardOpen(true)
  //       } else {
  //         setOnboardOpen(false)
  //         setAuthOpen(true)
  //       }
  //     })


  // }, [])

  const offPages = () => {
    setAuthOpen(false)
    setOnboardOpen(false)
    setEmailCodeOpen(false)
    setPwsCreateOpen(false)
    setCreateCardOpen(false)
    setMainOpen(false)
  }

  const onEmailCodeGoAuth = () => {
    offPages()
    setAuthOpen(true)
  }

  const onEnterEmailCode = (code) => {
    Api.emailCode(userEmail, code)
      .then(res => {
        const token = res['token']
        console.log(token)
        AsyncStorage.setItem('jwt', token)
        offPages()
        setPwsCreateOpen(true)
      })
  }

  const onSignIn = (email) => {
    setUserEmail(email)
    Api.auth(email)
    offPages()
    setEmailCodeOpen(true)
  }

  const onOnboardComplete = () => {
    AsyncStorage.setItem('isOnboardSee', 'true')
      .finally(() => {
        offPages()
        setAuthOpen(true)
      })
  }

  const onCreateCardFormSubmit = () => {
    offPages()
    setMainOpen(true)
  }

  const onPassCodeCreate = (code) => {
    offPages()
    console.log(code)
    setCreateCardOpen(true)
    setIsPasscodeCreate(true)
  }

  const onPassCodeCreatePageSkip = () => {
    offPages()
    setCreateCardOpen(true)
  }

  if (!splash) {
    return (
      <View  >
        <SplashScreen />
        <StatusBar style='auto' />
      </View>
    ) 
  } 

  return (
    <View style={styles.container}  >
      {onboardOpen && <OnboardSwipe onComplete={onOnboardComplete} />}
      {authOpen && <Auth onAuthSubmit={onSignIn} />}
      {emailCodeOpen && <Email_code onEnterEmailCode={onEnterEmailCode} onEmailCodeGoAuth={onEmailCodeGoAuth} />}
      {pwsCreateOpen && <PwsCreate onSubmit={onPassCodeCreate} onSkip={onPassCodeCreatePageSkip} />}
      {createCardOpen && <CreateCard onSubmit={onCreateCardFormSubmit} />}
      {mainOpen && <Main />}
      {/* <Test /> */}
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },

});
