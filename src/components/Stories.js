import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
const storyInfo = [
  {
    id: 1,
    name: 'Morrison',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'dobongsexxxking',
    image: require('../../assets/images/profile5.jpeg'),
  },
  {
    id: 3,
    name: 'John',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'DK',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'Aaron',
    image: require('../../assets/images/profile5.jpeg'),
  },
  {
    id: 6,
    name: 'Lee',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 7,
    name: 'Zack',
    image: require('../../assets/images/profile1.jpeg'),
  },
];
const Stories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {name: data.name, image: data.image})
            }>
            <View
              style={{
                position: 'relative',
                flexDirection: 'column',
                paddingHorizontal: 8,
              }}>
              {data.id === 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text></Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
