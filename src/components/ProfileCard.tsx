import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileCard() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'black', padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile Card</Text>
        </View>
    )
}