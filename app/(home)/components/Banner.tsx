import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const Banner = ({ styles }: any) => (
  <View style={styles.banner}>
    <Image
      source={{
        uri: "https://galxboy.co.za/cdn/shop/files/SHoes_desktop.png?v=1747983257&width=1400",
      }}
      style={styles.bannerImage}
    />
    <View style={styles.bannerOverlay} />
    <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>50% Off</Text>
      <Text style={styles.bannerSubtitle}>On everything today</Text>
      <Text style={styles.bannerCode}>With code: FSCREATION</Text>
      <TouchableOpacity style={styles.bannerButton}>
        <Text style={styles.bannerButtonText}>Get Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Banner;
