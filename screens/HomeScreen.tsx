import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';


export default function HomeScreen() {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='p-5'>
                <Image
                    style={{
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }} />
                    <NavOptions />
            </View>
        </SafeAreaView>
    )
}