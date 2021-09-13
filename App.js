import React from 'react';
import  {StyleSheet, Text,View } from 'react-native';

export default function HelloWorldApp()
{
  return (
<View style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF', 
}}>
       <Text> Shirin Mansouri <Text> from Iran </Text></Text>
        <Text> I am a student in Centennial college</Text>
</View>
   );
  }
