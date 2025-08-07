import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const categories = [
  { id: "1", name: "T-Shirts", icon: "👕" },
  { id: "2", name: "Jeans", icon: "👖" },
  { id: "3", name: "Jackets", icon: "🧥" },
  { id: "4", name: "Dresses", icon: "👗" },
  { id: "5", name: "Shoes", icon: "👟" },
];

const Categories = ({ styles }: { styles: any }) => (
  <View>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Shop by category</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.categoriesWrapper}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.categoryItem}>
          <View style={styles.categoryCircle}>
            <Text style={styles.categoryIcon}>{item.icon}</Text>
          </View>
          <Text style={styles.categoryLabel}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default Categories;
