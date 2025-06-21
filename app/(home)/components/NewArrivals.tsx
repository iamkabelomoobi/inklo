import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "../../components/ProductCard";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 16 * 2 - 16) / numColumns;

const FILTERS = [
  { label: "All", value: "All" },
  { label: "Accessories", value: "Accessories" },
  { label: "Bags", value: "Bags" },
  { label: "Shoes", value: "Shoes" },
  { label: "Shirts", value: "Shirts" },
];

const NewArrivals = ({ styles }: any) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const newArrivals = [
    {
      key: "1",
      title: "Deluxe T-Shirt",
      subtitle: "2 Colors",
      price: "1799.00",
      category: "Shirts",
      brand: "GalxBoy",
      image:
        "https://galxboy.co.za/cdn/shop/files/DeluxeTshirtmodelback.jpg?v=1722001606&width=500",
      isFavorite: false,
      onFavPress: () => {},
      onCartPress: () => {},
    },
    {
      key: "2",
      title: "Crossbody Bag",
      subtitle: "3 Colors",
      price: "1999.00",
      category: "Bags",
      brand: "GalxBoy",
      image:
        "https://galxboy.co.za/cdn/shop/files/CROSSBODYBAG2.jpg?v=1722416612&width=500",
      isFavorite: false,
      onFavPress: () => {},
      onCartPress: () => {},
    },
    {
      key: "3",
      title: "Nylon Canvas Hat Beige",
      subtitle: "1 Color",
      price: "1599.00",
      category: "Accessories",
      brand: "GalxBoy",
      image:
        "https://galxboy.co.za/cdn/shop/files/NylonCanvashatBeige_5ddb20b7-d698-4227-9a38-fd2093ae1a08.jpg?v=1722328650&width=500",
      isFavorite: false,
      onFavPress: () => {},
      onCartPress: () => {},
    },
    {
      key: "4",
      title: "Angel T-Shirt",
      subtitle: "4 Colors",
      price: "1299.00",
      category: "Shirts",
      brand: "GalxBoy",
      image:
        "https://galxboy.co.za/cdn/shop/files/angel_T_3.jpg?v=1721995844&width=500",
      isFavorite: false,
      onFavPress: () => {},
      onCartPress: () => {},
    },
    {
      key: "5",
      title: "Classic Sneakers",
      subtitle: "2 Colors",
      price: "2499.00",
      category: "Shoes",
      brand: "GalxBoy",
      image:
        "https://galxboy.co.za/cdn/shop/files/PLATFORM3.jpg?v=1747991541&width=500",
      isFavorite: false,
      onFavPress: () => {},
      onCartPress: () => {},
    },
    {
      key: "5",
      title: "Classic Sneakers",
      subtitle: "2 Colors",
      price: "2499.00",
      category: "Shoes",
      brand: "GalxBoy",
      image:
        "https://galxboy.co.za/cdn/shop/files/MULE3.jpg?v=1725976254&width=500",
      isFavorite: false,
      onFavPress: () => {},
      onCartPress: () => {},
    },
  ];

  const filteredArrivals =
    selectedFilter === "All"
      ? newArrivals
      : newArrivals.filter(
          (item) => item.category.toLowerCase() === selectedFilter.toLowerCase()
        );

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 16, marginBottom: 12 }}
      >
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter.value}
            onPress={() => setSelectedFilter(filter.value)}
            style={{
              marginRight: 12,
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderRadius: 16,
              backgroundColor:
                selectedFilter === filter.value ? "#2A2A2A" : "#f0f0f0",
            }}
          >
            <Text
              style={{
                color: selectedFilter === filter.value ? "#fff" : "#2A2A2A",
                fontWeight: selectedFilter === filter.value ? "bold" : "normal",
              }}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredArrivals}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        columnWrapperStyle={{ marginBottom: 16 }}
        renderItem={({ item, index }) => {
          const isLastColumn = (index + 1) % numColumns === 0;
          return (
            <View
              style={{
                flex: 1,
                marginRight: isLastColumn ? 0 : 2,
                marginLeft:  isLastColumn ? 0 : 13,
              }}
            >
              <ProductCard
                id={item.key}
                image={item.image}
                category={item.category}
                title={item.title}
                price={item.price}
                isFavorite={item.isFavorite}
                onFavPress={item.onFavPress}
              />
            </View>
          );
        }}
      />
    </>
  );
};

export default NewArrivals;
