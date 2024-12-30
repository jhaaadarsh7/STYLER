import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://c8.alamy.com/comp/WB2N6F/trade-union-palace-of-culture-in-minsk-belarus-WB2N6F.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={[styles.cardTittle, styles.cardtext]}>Hawa Mahal</Text>
          <Text style={[styles.cardLabel, styles.cardtext]}>
            Pinky City,jaipur
          </Text>
          <Text style={[styles.cardDescription, styles.cardtext]}>
            Hawa Mahal, the "Palace of Winds" in Jaipur, India, features
            intricate architecture with 953 windows showcasing Rajput artistry.
          </Text>
          <Text style={[styles.cardFooter, styles.cardtext]}>12 mins away</Text>
        </View>
      </View>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardtext: {
    color: 'Black',
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 26,
  },
  cardBody: {
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color:'#242B2E',
    fontSize: 12,
     marginBottom: 6,
     marginTop:6,
     flexShrink:1,
    },
  cardFooter: {},
  cardTittle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
