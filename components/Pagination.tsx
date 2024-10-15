import { View, Text } from 'react-native'
import React from 'react'
import { ImageArray } from '@/constants/Arrays'

interface IndexProps {
    currentIndex: number;
  
}
export default function Pagination({currentIndex}:IndexProps) {
  return (
    <View>
      <Text>
        {
            ImageArray.map((_, index) => (
                <View key={index} style={{width:currentIndex === index ? 10 : 30,height:5,backgroundColor:'black',marginHorizontal:4,borderRadius: currentIndex === index ? 6 : 0}}></View>
            ))
          }
      </Text>
    </View>
  )
}