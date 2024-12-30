import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  export default function ActionCards() {
    function openWebsite(websiteLink: string) {
      Linking.openURL(websiteLink).catch((err) =>
        console.error('Failed to open URL:', err)
      );
    }
  
    return (
      <View>
        <Text style={styles.headingText}>Blog Cards</Text>
        <View style={[styles.card, styles.elevatedcard]}>
          <View style={styles.headingContainer}>
            <Text style={[styles.headerText,styles.textcolor]}>
              What's New in JavaScript 21 - ES12
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
          <View style={styles.Bodycontainer}>
            <Text numberOfLines={3} style={styles.textcolor}>
              JavaScript is a versatile programming language that powers dynamic
              and interactive features on websites. It enables developers to
              create responsive user interfaces, handle events, and manipulate web
              elements in real-time. From simple scripts to advanced frameworks,
              JavaScript's adaptability has made it a cornerstone of modern web
              development, revolutionizing digital experiences.
            </Text>
          </View>
          <View style={styles.Footercontainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.w3schools.com/js/')
              }
            >
              <Text style={styles.socialLinks}>Read More</Text>
              
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite("https://www.instagram.com/adarsh.jha1.2.3/")
              }
            >
<Text style={styles.socialLinks}>follow me</Text>              
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    headingText: {
      color:'white',
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8,
    },
    card: {
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16,
    },
    elevatedcard: {
      backgroundColor:"orange",
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:"#333",
    shadowOpacity:0.4
    },
    headerText: {
      color:"Black",
      fontSize:15,
      fontWeight:'600'
    },
    headingContainer: {
      height:40,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    cardImage: {
    height:190,
    },
    Bodycontainer: {
      padding:10
    },
    Footercontainer: {
        padding:8,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    textcolor:{
        color:'white'
    },
    socialLinks:{
      fontSize:16,
      color:'black',
      backgroundColor:"white",
      paddingHorizontal:20,
      paddingVertical:6,
borderRadius:6
    }
    
  });
  