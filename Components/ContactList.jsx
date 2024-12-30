// import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// export default function ContactList() {
//   const images = [
//     {
//       image:
//         'https://images.pexels.com/photos/14983798/pexels-photo-14983798/free-photo-of-a-man-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/5234248/pexels-photo-5234248.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     },
//   ];

//   console.log(images);

//   const contacts = [
//     {
//       uid: 1,
//       name: 'Aadarsh Jha',
//       status: '😊 Enjoying a productive day!',
//       imageurl:
//         'https://images.pexels.com/photos/14983798/pexels-photo-14983798/free-photo-of-a-man-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       uid: 2,
//       name: 'Sita Thapa',
//       status: '😴 Taking a well-deserved nap.',
//       imageurl:
//         'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       uid: 3,
//       name: 'Ram Gurung',
//       status: '🚀 Deep into coding mode.',
//       imageurl:
//         'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       uid: 4,
//       name: 'Gita Sharma',
//       status: '🏞️ Enjoying a scenic hike.',
//       imageurl:
//         'https://images.pexels.com/photos/5234248/pexels-photo-5234248.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//   ];

//   console.log(contacts);

//   return (
//     <View>
//       <Text style={styles.headingText}>ContactList</Text>
//       <ScrollView >
//         {images.map(({image}, index) => (
//           <View key={index} style={styles.imageContainer}>
//             <Image source={{uri: image}} style={styles.image} />
//           </View>
//         ))}
//       </ScrollView>
//       <ScrollView style={styles.container} scrollEnabled={false}>
//         {contacts.map(({uid, name, status, imageurl}) => (
//           <View key={uid} style={styles.userCard}>
//             <Image source={{uri: imageurl}} style={styles.userImage} />
//             <View>
//               <Text style={styles.userName}>{name}</Text>
//               <Text style={styles.userStatus}>{status}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headingText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingHorizontal: 8,
//   },
//   container: {
//     paddingHorizontal: 10,
//     marginBottom: 4,
//   },
//   userCard: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 4,
//     backgroundColor: '#8D3DAF',
//     padding: 8,
//     borderRadius: 10,
//   },
//   userImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//     marginRight: 14,
//   },
//   userName: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   userStatus: {
//     color: 'white',
//     fontSize: 12,
//   }, 

//   imageContainer: {
//     flex: 1,
//    flexDirection:"row",
//    flexWrap: 'wrap',

//   },
 
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
// });
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const images = [
    {
      image:
        'https://images.pexels.com/photos/14983798/pexels-photo-14983798/free-photo-of-a-man-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      image:
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      image:
        'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      image:
        'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      image:
        'https://images.pexels.com/photos/5234248/pexels-photo-5234248.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      image:
        'https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const contacts = [
    {
      uid: 1,
      name: 'Aadarsh Jha',
      status: '😊 Enjoying a productive day!',
      imageurl:
        'https://images.pexels.com/photos/14983798/pexels-photo-14983798/free-photo-of-a-man-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      uid: 2,
      name: 'Sita Thapa',
      status: '😴 Taking a well-deserved nap.',
      imageurl:
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      uid: 3,
      name: 'Ram Gurung',
      status: '🚀 Deep into coding mode.',
      imageurl:
        'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      uid: 4,
      name: 'Gita Sharma',
      status: '🏞️ Enjoying a scenic hike.',
      imageurl:
        'https://images.pexels.com/photos/5234248/pexels-photo-5234248.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView horizontal={true} scrollEnabled={true}>
        <View style={styles.imageContainer}>
          {images.map(({ image }, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </View>
      </ScrollView>

      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageurl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageurl }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    color: 'white',
    fontSize: 12,
  },

  imageContainer: {
    flexDirection: 'row', // Align images horizontally
    flexWrap: 'wrap', // Wrap images to the next row if necessary
    justifyContent: 'space-between', // Optional: space between images
    marginBottom: 10,
  },

  imageWrapper: {
    marginBottom: 10, // Spacing between rows if images wrap
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin:4,
  },
});
