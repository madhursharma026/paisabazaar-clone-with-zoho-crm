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
    image: 'https://www.paisabazaar.com/PBHP/assets/images/stepupCardNewMob.png',
  },
  {
    id: 2,
    image: 'https://www.paisabazaar.com/wp-content/uploads/2018/12/free-credit-score-on-whatsapp.jpg',
  },
];

const CarouselSlider = () => {
  const [carouselItems, setCarouselItems] = useState(data);
  const renderCarouselItem = ({ item }) => {
    return (
      <>
        <Image
          source={{
            uri: `${item.image}`,
          }}
          style={{ width: itemWidth, height: 180, borderRadius: 30, marginHorizontal: 5, }}
        />
      </>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
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

export default CarouselSlider;
