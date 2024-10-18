import { View, Text } from 'react-native'
import React from 'react'
import { ImageArray } from '@/constants/Arrays'

interface ColorProps {
  white: string,
  black: string
}
interface IndexProps {
    currentIndex: number,
    color: string
}
export default function Pagination({currentIndex,color}:IndexProps) {
  return (
    <View>
      <Text>
        {
            ImageArray.map((_, index) => (
                <View key={index} style={{width:currentIndex !== index ? 5 : 30,height:5,backgroundColor:color,marginHorizontal:4,borderRadius: currentIndex === index ? 6 : 3}}></View>
            ))
          }
      </Text>
    </View>
  )
}