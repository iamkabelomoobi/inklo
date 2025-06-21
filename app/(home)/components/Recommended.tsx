import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const recommendedItems = [
  {
    id: "1",
    name: "Eco Tote Bag",
    image:
      "https://galxboy.co.za/cdn/shop/files/Eternallongsleevetblack.jpg?v=1746172865&width=500",
    price: "R120",
  },
  {
    id: "2",
    name: "Handmade Necklace",
    image:
      "https://galxboy.co.za/cdn/shop/files/NylonCanvashatBeige_5ddb20b7-d698-4227-9a38-fd2093ae1a08.jpg?v=1722328650&width=500",
    price: "R200",
  },
  {
    id: "3",
    name: "African Print Shirt",
    image:
      "https://galxboy.co.za/cdn/shop/files/DeluxeTshirtmodelback.jpg?v=1722001606&width=500",
    price: "R350",
  },
];

const Recommended = ({ styles }: { styles: any }) => (
  <View style={{ marginBottom: 10 }}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Recommended for you</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
    <FlatList
      data={recommendedItems}
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
          <Text style={{ color: "#111", fontWeight: "bold" }}>
            {item.price}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default Recommended;
