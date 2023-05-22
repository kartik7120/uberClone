import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='p-5'>
                <Image
                    style={{
                        resizeMode: "contain",
                        width: "100",
                        height: "100"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }} />
            </View>
        </SafeAreaView>
    )
}