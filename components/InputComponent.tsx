import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface InputProps {
  placeholder: string,
  onChangeText: (text: string) => void,
  value: string,
  showIconToggle?: boolean
  // secureTextEntry?: boolean,
  // keyboardType?: string,
  // returnKeyType?: string,
  // onSubmitEditing?: () => void,
  // blurOnSubmit?: boolean,
  // autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters',
  // autoCorrect?: boolean,
  // editable?: boolean,
  // maxLength?: number,
  // onEndEditing?: (event: { nativeEvent: { text: string } }) => void,
  // onFocus?: () => void,
  // onBlur?: () => void,
  // onSelectionChange?: (event: { nativeEvent: { selection: { start: number; end: number } } }) => void,
  // onContentSizeChange?: (event: { nativeEvent: { contentSize: { width: number; height: number } } }) => void,

}
export default function InputComponent({ placeholder, onChangeText, value, showIconToggle }: InputProps) {
  const [showIcon, setShowIcon] = useState(false);

  const styles = StyleSheet.create({
    input: {
      height: 55,
      borderRadius: 10,
      margin: 10,
      borderWidth: 0,
      padding: 10,
      paddingHorizontal: 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginHorizontal: 'auto',
      color: 'white',
      backgroundColor: '#0A194E'
    },
  });

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} behavior='padding' style={{ width: '100%' }}>
      <View style={styles.input}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#999"
          style={{ flex: 1, color: 'white' }}
        />
        {showIconToggle && (
          <MaterialCommunityIcons
            name={showIcon ? 'eye-off-outline' : 'eye-outline'}
            size={23}
            color="white"
            onPress={() => setShowIcon(!showIcon)}
            style={{ position: 'absolute', right: 15 }}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}