import { View, Text, ScrollView, ScrollViewComponent, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView,  } from 'react-native'
import images from '@/constants/images'
import icons from '@/constants/icons'

const Signin = () => {
  return (
  <SafeAreaView className='bg-white h-full '>
    <ScrollView contentContainerClassName='h-full'>
      <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
      <View>
        <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to our Restate</Text>
        <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Let's get you closer to {"\n"}
        <Text className='text-primary-300'>Your Idea Home</Text>
        </Text>
        <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity
            
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Signin