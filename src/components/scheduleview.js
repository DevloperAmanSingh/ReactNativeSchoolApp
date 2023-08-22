import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

export default function scheduleview({ item , selected }) {
  return (
    <SafeAreaView>
  <View className="flex flex-col mt-0 mx-auto">
    {selected === 'M' ? (
      item.length > 0 ? (
        item.map((item, index) => (
          <View key={index} className="bg-blue-200 rounded-[20px] h-[70px] w-[320px] mx-auto mt-3">
            <View className="flex flex-row items-center mx-3 mt-3">
              <Image style={{ width: 45, height: 45 }} source={require('../../assets/book.svg')} resizeMode="cover" />
              <View className="flex flex-col ml-3">
                <Text className="text-[15px] font-semibold text-blue-600">{item.subjectCode}</Text>
                <Text className="text-[15px] font-semibold text-blue-600">{item.index}</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={24} color="blue" style={{ flexDirection: 'row-reverse', marginLeft: 'auto' }} />
            </View>
          </View>
        ))
      ) : (
        <Text>No classes</Text>
      )
    ) : (
      <Text>No schedule found.</Text>
    )}
  </View>
</SafeAreaView>

  )
}