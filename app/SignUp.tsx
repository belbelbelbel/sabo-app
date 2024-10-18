import { View, Text, SafeAreaView, useWindowDimensions, TouchableOpacity, Modal } from 'react-native'
import CheckBox from 'react-native-check-box'
import React, { useState } from 'react'
import InputComponent from '@/components/InputComponent'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSelected, setSelected] = useState(false);
    const { width, height } = useWindowDimensions();
    const [showModal, setShowModal] = useState(false)
    const router = useRouter();
    const handleShowModal = () => {
        setShowModal(true)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#050D2A' }}>
            <View style={{ width: '90%', marginHorizontal: 'auto', paddingTop: 40, display: 'flex', gap: 25 }}>
                <Text style={{ color: 'white' }} onPress={() => router.back()}>
                    <MaterialCommunityIcons name='arrow-left' color={'white'} size={30} />
                </Text>
                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', width: '60%' }}>Create your Sabo Account</Text>
                </View>
                <View>
                    <View style={{ width: '100%' }}>
                        <InputComponent value={firstName} onChangeText={setFirstName} placeholder='First name' />
                        <InputComponent value={lastName} onChangeText={setLastName} placeholder='Last name' />
                        <InputComponent value={email} onChangeText={setEmail} placeholder='Email address' />
                        <InputComponent value={referralCode} onChangeText={setReferralCode} placeholder='Referral code (Optional)' />
                        <InputComponent value={password} onChangeText={setPassword} placeholder='Password' showIconToggle={true} />
                        <InputComponent value={confirmPassword} onChangeText={setConfirmPassword} placeholder='Confirm Password' showIconToggle={true} />
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10 }}>
                        <CheckBox
                            isChecked={isSelected}

                            onClick={() => setSelected(!isSelected)}
                            rightTextStyle={{ color: 'white' }}
                            checkedCheckBoxColor={'white'}
                            checkBoxColor={'blue'}
                            style={{ borderColor: 'white', backgroundColor: 'transparent' }}
                        />
                        <Text style={{ color: 'white' }}>Remember Me</Text>
                    </View>
                </View>
                <TouchableOpacity disabled={!isSelected} onPress={() => router.push('/OtpPage')} style={{ backgroundColor: '#0B66FF', width: '100%', height: 55, marginHorizontal: 'auto', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Sign Up</Text>
                </TouchableOpacity>
                <View >
                    {
                        showModal && (
                            <Modal visible={showModal} animationType="slide"
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: 40,height:40}}
                                presentationStyle={'pageSheet'}
                                // transparent={true}

                            >
                                <View style={{ backgroundColor: 'white', width: '90%', height: '50%', marginHorizontal: 'auto', borderRadius: 10, padding: 20,display:'flex', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Success!</Text>
                                    <Text style={{ marginTop: 10 }}>Your account has been created successfully. You can now login to your Sabo account.</Text>
                                    <TouchableOpacity style={{ backgroundColor: '#0B66FF', width: '100%', height: 55, marginTop: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => setShowModal(false)}>
                                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}
