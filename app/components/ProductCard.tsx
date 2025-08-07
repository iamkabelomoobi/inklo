import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number | string;
  category?: string;
  isFavorite: boolean;
  onFavPress: () => void;
}

const ProductCard = ({
  id,
  image,
  title,
  price,
  category,
  isFavorite,
  onFavPress,
}: ProductCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/(shop)/product",
      params: { id },
    });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={handlePress}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity
          style={styles.favBtn}
          onPress={(e) => {
            e.stopPropagation();
            onFavPress();
          }}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={isFavorite ? "#100C08" : "#bbb"}
          />
        </TouchableOpacity>
      </View>
      {/* Order: category, title, price */}
      {/* {category && (
        <Text style={styles.category} numberOfLines={1}>
          {category}
        </Text>
      )} */}
      {/* Add a line break (spacer) between category and title */}
      {category && <View style={{ height: 2 }} />}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.price}>R{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f8f6",
    borderRadius: 16,
    margin: 2,
    width: 180,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    paddingBottom: 12,
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 4,
    elevation: 2,
    zIndex: 10,
  },
  title: {
    fontSize: 15,
    color: "#2A2A2A",
    fontWeight: "600",
    marginLeft: 12,
    marginBottom: 4,
    marginTop: 0, 
  },
  category: {
    fontSize: 12,
    color: "#2A2A2A",
    fontWeight: "600",
    marginLeft: 12,
    marginTop: 0, // remove extra top margin
    textTransform: "uppercase",
    textAlign: "center",
    alignSelf: "center",
  },
  price: {
    fontSize: 16,
    color: "#2A2A2A",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
    marginLeft: 0,
  },
});

export default ProductCard;
