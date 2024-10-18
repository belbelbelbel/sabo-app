import { View, Text, StyleSheet, Image, useWindowDimensions, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import Pagination from '@/components/Pagination';
import { ImageArray } from '@/constants/Arrays';
import { useRouter } from 'expo-router';
export default function Onboarding() {
  const router = useRouter()
  const { width, height } = useWindowDimensions()
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref: any = useRef()
  const Color = {
    white: '#ffff',
    black: '#00000'
  }

  const handleNext = () => {
    const nextSlide = currentIndex + 1
    if (nextSlide != ImageArray.length) {
      const offset = nextSlide * width
      ref?.current?.scrollToOffset({ offset })
      setCurrentIndex(nextSlide)
    }
  }
  const HandlelastSLide = () => {
    const lastslide = ImageArray.length - 1
    const offset = lastslide * width
    ref?.current?.scrollToOffset({ offset })
    setCurrentIndex(lastslide)

  }
  const UpdateSlide = (e: any) => {
    setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width))
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050D2A" }}>
      <StatusBar style='light' />
      <View style={Styles.container}>
        <View style={{ position: 'relative', zIndex: 1, top: 40 }}>
          <FlatList horizontal ref={ref} pagingEnabled onMomentumScrollEnd={UpdateSlide} data={ImageArray} renderItem={({ item }) => (
            <Image style={{ objectFit: 'contain', width: width }} source={item.src} />
          )} />
        </View>
        {/* <LinearGradient colors={['transparent','#030F3A']} style={{backgroundColor:'white',width:width,height:80,position:'absolute',top:260}}></LinearGradient> */}
        <Text style={{ zIndex: 4, textAlign: 'center' }}> <Pagination color='white' currentIndex={currentIndex} /></Text>
        <View style={[Styles.card, { backgroundColor: 'white', marginHorizontal: 'auto', width: '96%', height: height * 0.47, borderTopRightRadius: 45, borderTopLeftRadius: 45, display: 'flex', gap: 100, paddingTop: 26, zIndex: 2, marginTop: 20 }]}>
          <View style={{ display: 'flex', gap: 20 }}>
            <Text style={{ color: '#04103A', fontSize: 26, fontWeight: '800', width: '70%', marginHorizontal: 'auto', textAlign: 'center' }}>
              Sabo app the safest
              and most trusted
            </Text>
            <Text style={{ color: '#030F3A', width: '80%', marginHorizontal: 'auto', textAlign: 'center' }}>Your finance work starts here. We are here to help you track and deal with speeding up your transactions.</Text>
          </View>
          {
            currentIndex === ImageArray.length - 1 ? (
              <View style={{ display: 'flex', gap: 15, position: 'relative', top: -40 }}>
                <TouchableOpacity style={{ backgroundColor: '#0B66FF', width: '90%', marginHorizontal: 'auto', height: 60, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => router.push('/SignUp')}>
                  <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }} >Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 20 }}>Sign in</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ display: 'flex', width: '68%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 'auto' }}>
                <Text style={Styles.SkipText2} onPress={HandlelastSLide}>Skip</Text>
                <Pagination currentIndex={currentIndex} color='black' />
                <Text style={Styles.SkipText} onPress={handleNext}>Next</Text>
              </View>
            )

          }
        </View>

      </View>

    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#050D2A',
  },
  SkipText: {
    color: '#030F3A',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  SkipText2: {
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  card: {
    shadowColor: '#050D2A',
    shadowOffset: {
      width: 0,
      height: -100,
    },
    shadowOpacity: 0.97,
    shadowRadius: 6,
    elevation: 14,
  },
})