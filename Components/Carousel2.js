import React, { useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { View, Image, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth * 0.85);
const itemMargin = 10;

const data = [
  {
    id: 1,
    image: 'https://www.shutterstock.com/image-vector/hacker-attack-fraud-user-data-260nw-2002328921.jpg',
  },
  {
    id: 2,
    image: 'https://www.paisabazaar.com/wp-content/uploads/2018/12/free-credit-score-on-whatsapp.jpg',
  },
  {
    id: 3,
    image: 'https://digest.myhq.in/wp-content/uploads/2022/12/make-in-india-dream.jpg',
  },
];

const CarouselSlider2 = () => {
  const [carouselItems, setCarouselItems] = useState(data);
  const renderCarouselItem = ({ item }) => {
    return (
      <View style={{marginBottom: 150}}>
        <Image
          source={{
            uri: `${item.image}`,
          }}
          style={{ width: itemWidth, height: 200 }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        itemMargin={itemMargin}
        autoplay
        autoplayDelay={5000}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  mainHeading: {
    fontWeight: 500,
    fontSize: 15,
    marginTop: 30,
    marginBottom: 30,
  },
})

export default CarouselSlider2;
