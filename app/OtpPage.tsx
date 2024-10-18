import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import React from 'react'

export default function OtpPage() {
    const styles = StyleSheet.create({
        borderStyleBase: {
          width: 30,
          height: 45
        },
      
        borderStyleHighLighted: {
          borderColor: "#03DAC6",
        },
      
        underlineStyleBase: {
          width: 30,
          height: 45,
          borderWidth: 0,
          borderBottomWidth: 1,
        },
      
        underlineStyleHighLighted: {
          borderColor: "#03DAC6",
        },
      });
    return (
        <SafeAreaView style={{flex:1,backgroundColor: "#050D2A"}}>
            <View>
                <Text style={{color:'white'}}>OtpPage</Text>
            </View>
            <OTPInputView     
            placeholderTextColor='white'
            style={{width: '60%', height: 100,marginHorizontal:'auto'}} pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled = {(code => {
                console.log(`Code is ${code}, you are good to go!`)
            })}
            />
        </SafeAreaView>
    )
}