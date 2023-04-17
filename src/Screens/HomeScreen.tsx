import * as React from "react";
import type { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import data from "../utils/data";
import ControlsBar from "../components/ControlsBar";
import VideoCarousel from "../components/Video/Carousel";

type HomeScreenProps = {};

const HomeScreen: FunctionComponent<HomeScreenProps> = ({}) => {
  const { top } = useSafeAreaInsets();
  return <View style={[styles.container, {paddingTop: top}]}>
    <VideoCarousel data={data} />
    <ControlsBar />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#141414"
  }
});

export default HomeScreen;
export { HomeScreen };
