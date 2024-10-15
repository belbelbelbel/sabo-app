import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'

export default function SplashScreen() {
    const router = useRouter()
    const [show,setShow] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setShow(true)
        if (show) {
            router.push('/OnboardingScreen')
        }
      },3000)
    })
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <StatusBar style='light' />
           {
            show && (
                <View>
                    <Image source={require('../assets/images/splashscreen.png')} />
                </View>
            )
           }
        </View>
    )
}