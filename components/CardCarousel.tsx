import React from "react";
import Card from "./Card";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const CardCarousel = () => {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1",
      image: "/img1.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2",
      image: "/img3.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3",
      image: "/img1.jpg",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4",
      image: "/img2.jpg",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5",
      image: "/img3.jpg",
    },
  ];
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  const width = Dimensions.get("window").width;
  const renderItem = ({ item }) => (
    <Card
      image={item.image}
      title={item.title}
      description={item.description}
      onPress={() => console.log(`${item.title} clicked`)}
    />
  );
  console.log(progress.value);
  return (
    <View className="p-4">
      <Carousel
        ref={ref}
        loop
        width={width}
        height={360}
        data={cards}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        onProgressChange={progress}
      />
      <Pagination.Basic
        progress={progress}
        data={cards}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5 }}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default CardCarousel;
