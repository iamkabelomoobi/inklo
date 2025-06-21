import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const flashSales = [
  {
    id: "1",
    name: "Kente Scarf",
    image: "https://www.izintoclothing.com/wp-content/uploads/2024/03/Peace-in-our-Land-Izinto-2-324x324.png",
    oldPrice: "R180",
    salePrice: "R120",
    endsIn: "2h 15m",
  },
  {
    id: "2",
    name: "Beaded Earrings",
    image: "https://galxboy.co.za/cdn/shop/files/PLATFORM3.jpg?v=1747991541&width=500",
    oldPrice: "R100",
    salePrice: "R60",
    endsIn: "1h 40m",
  },
  {
    id: "3",
    name: "Canvas Shopper",
    image: "https://www.izintoclothing.com/wp-content/uploads/2023/09/Black-Soweto-thing-microbus-324x324.jpg",
    oldPrice: "R220",
    salePrice: "R150",
    endsIn: "3h 05m",
  },
];

const FlashSales = ({ styles }: { styles: any }) => (
  <View style={[styles.section]}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Flash Sales</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
    <FlatList
      data={flashSales}
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
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <Text style={{ color: "#888", textDecorationLine: "line-through", marginRight: 6 }}>
              {item.oldPrice}
            </Text>
            <Text style={{ color: "#d32f2f", fontWeight: "bold" }}>{item.salePrice}</Text>
          </View>
          <Text style={{ color: "#d32f2f", fontSize: 12 }}>Ends in {item.endsIn}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default FlashSales;