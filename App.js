import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import Scheduleview from './src/components/scheduleview';
export default function App() {
  
  // make day selected state 
  const [selected, setSelected] = useState('Mo');
  const renderSchedule = (schedule) => {
    if (schedule && schedule.length > 0) {
      return schedule.map((scheduleItem, index) => (
        <View key={index} className="bg-blue-200 rounded-[20px] h-[70px] w-[320px] mx-auto mt-3">
          <View className="flex flex-row items-center mx-3 mt-3">
            <Image style={{ width: 45, height: 45 }} source={require('./assets/book.svg')} contentFit="cover" />
            <View className="flex flex-col ml-3">
              <Text className="text-[15px] font-semibold text-blue-600">{scheduleItem.subjectCode}</Text>
              <Text className="text-[15px] font-semibold text-blue-600">{scheduleItem.time}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="blue" style={{ flexDirection: 'row-reverse', marginLeft: 'auto' }} />
          </View>
        </View>
      ));
    } else {
      return <Text>No classes</Text>;
    }
  };
  
  const boxDeatils = [
    {
      title: "Overall Attendance",
      percentage: "95%",
      index: "1"
    },
    {
      title: "Overall Marks Earned",
      percentage: "100%",
      index: "2"
    },
    {
      title: "Overall CGPA Earned",
      percentage: "9.6",
      index: "2"
    },
    
  ]

  const schedule = {
    // {
    //   subjectCode: "BMAT1202",
    //   time: "10:00 AM - 11:00 AM",
    //   index: "1",
    //   day : "M"
    // },
    // {
    //   subjectCode: "PCES1201",
    //   time: "11:00 AM - 12:00 PM",
    //   index: "2"
    // },

    Monday: [
      {
        subjectCode: "English",
        time: "10:00 AM - 11:00 AM",
        index: "1",
      },
      {
        subjectCode: "Hindi",
        time: "11:00 AM - 12:00 PM",
        index: "2"
      },
      {
        subjectCode: "Maths",
        time: "10:00 AM - 11:00 AM",
        index: "3",
      },
      {
        subjectCode: "Science",
        time: "11:00 AM - 12:00 PM",
        index: "4"
      },
      {
        subjectCode: "Social Science",
        time: "10:00 AM - 11:00 AM",
        index: "5",
      },
      {
        subjectCode: "Computer",
        time: "11:00 AM - 12:00 PM",
        index: "6"
      },
    
  ],
    Tuesday: [
      {
        subjectCode: "Computer",
        time: "10:00 AM - 11:00 AM",
        index: "1",
      },
      {
        subjectCode: "Social Science",
        time: "11:00 AM - 12:00 PM",
        index: "2"
      },
    ],
  Wednesday: [
    {
      subjectCode: "Computer",
      time: "10:00 AM - 11:00 AM",
      index: "1",
    },
    {
      subjectCode: "Social Science",
      time: "11:00 AM - 12:00 PM",
      index: "2"
    },
  
],

}
  const days = [
    {
      day: "Mo",
      index: "1"
    },
    {
      day: "Tu",
      index: "2"
    },
    {
      day: "We",
      index: "3"
    },
    {
      day: "Th",
      index: "4"
    },
    {
      day: "Fr",
      index: "5"
    },
    {
      day: "Sa",
      index: "6"
    },
    {
      day: "Su",
      index: "7"
    },
  ]
  return (
    <SafeAreaView>
      <View className="flex flex-row mt-12 justify-between mx-6">
        <Ionicons name="reorder-four-outline" size={24} color="black" />
        <Text className="text-xl font-bold">Home</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View>
        <Text className="text-2xl font-bold text-start mx-6 mt-12">
          Welcome{" "}
          <Text className="text-2xl text-red-600 underline underline-offset-[20px]">
            Aman
          </Text>
        </Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {boxDeatils.map((item, index) => (
          <View
            key={index}
            className=" mt-7 mx-2 h-[150px] w-[143px] rounded-[30px] bg-blue-200 mb-7"
          >
            <View className=" justify-start items-start my-[40px] pl-5">
              <Text className="text-[36px] font-semibold text-blue-600">
                {item.percentage}
              </Text>
              <Text className="text-[15px] font-base text-blue-600 mt-1">
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* making a schdule card with time and subject code
       */}

      {/* <FlatList 
      data={schedule}
      keyExtractor={(item) => item.index.toString()}
      scrollEnabled = {true}
      initialNumToRender={schedule.length}
      showsVerticalScrollIndicator={false}
      pagingEnabled={true}
      renderItem={({item}) => (
       <Scheduleview item={item} />
      )}
      /> */}
      {/* <ScrollView >
        { schedule.map((item, index) => {
          return (
            <Scheduleview key={index} item={item} />
            )
        }
        )}
        </ScrollView> */}

      {/* make a horizontal scroll view for days with rounded corners */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {days.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`mt-2 mx-2 h-12 w-12 rounded-full ${
              selected === item.day ? "bg-blue-300" : "bg-blue-100"
            } mb-7`}
            onPress={() => setSelected(item.day)}
          >
            <View className=" justify-start items-start my-auto mx-auto">
              <Text className="text-[15px] font-semibold text-blue-600 text-center">
                {item.day}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView>
        <View className="flex flex-col mt-0 mx-auto">
          {selected === "Mo" ? (
            renderSchedule(schedule["Monday"])
          ) : selected === "Tu" ? (
            renderSchedule(schedule["Tuesday"])
          ) : (
            <Text>No schedule found.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    marginTop:40
  },
});
