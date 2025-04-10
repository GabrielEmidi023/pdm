import React from 'react';
import { View, Text, Image } from 'react-native';

export default function EscudoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ marginTop: 10, fontSize: 20 }}>Flamengo</Text>
    </View>
  );
}