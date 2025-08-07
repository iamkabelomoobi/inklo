import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const topSellers = [
  {
    id: "1",
    name: "Grey Sowetagonia T-Shirt",
    image:
      "https://www.izintoclothing.com/wp-content/uploads/2022/09/Grey-Sowetagonia-tshirt-324x324.png",
    price: "R80",
  },
  {
    id: "2",
    name: "Black Soweto Thing Microbus",
    image:
      "https://www.izintoclothing.com/wp-content/uploads/2023/09/Black-Soweto-thing-microbus-324x324.jpg",
    price: "R400",
  },
  {
    id: "3",
    name: "Leather Sandals",
    image:
      "https://www.izintoclothing.com/wp-content/uploads/2024/03/Peace-in-our-Land-Izinto-2-324x324.png",
    price: "R250",
  },
];

const TopSellers = ({ styles }: { styles: any }) => (
  <View>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Trending Products</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
    <FlatList
      data={topSellers}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingLeft: 16, paddingBottom: 8 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            resizeMode="cover"
          />
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={{ color: "#100C08", fontWeight: "bold" }}>
            {item.price}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default TopSellers;
