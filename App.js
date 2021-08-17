import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-naive';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

function WriteStoryScreen() {
<TouchableOpacity
            style={StyleSheet.submitButton}
            >
             <Text style={StyleSheet.buttonText}>Submit</Text>
            </TouchableOpacity>
}

function ReadStoryScreen() {
    <TouchableOpacity
            style={StyleSheet.submitButton}
            >
             <Text style={StyleSheet.buttonText}>Read Story Screen</Text>
            </TouchableOpacity>
}

const Tab = createBottomTabNavigator(
     {
         ReadStory:ReadStoryScreen,
         WriteStory:WriteStoryScreen,
     }
     ,
         defaultNavigationOptions , ({navigation})=>({
           tabBarIcon:({})=>{
               const routeName = navigation.state.routeName
               if(routeName === 'WriteStory'){
                   return(
                       <Image/>
                   )
               }
               else if(routeName==='Search'){
                   return(
                       <Image/>
                   )
               }
           }
         })
        


);

