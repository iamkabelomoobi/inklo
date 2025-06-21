import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const HomeScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Add your refresh logic here (e.g., fetch data)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  // Use dummy data for now until we have proper images
  const categories = [
    { id: '1', name: 'Shirts', icon: null },
    { id: '2', name: 'Pants', icon: null },
    { id: '3', name: 'Shoes', icon: null },
    { id: '4', name: 'Blazer', icon: null },
  ];

  // Use dummy data for now until we have proper images
  const trendingProducts = [
    { id: '1', name: "Men's Luxury T-Shirt", price: '$42.00', image: null },
    { id: '2', name: "Men's Premium Shoes", price: '$79.00', image: null },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good Morning!</Text>
          <Text style={styles.name}>Robert</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search your product"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.voiceButton}>
          <Ionicons name="mic-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryCircle}>
                {item.icon ? (
                  <Image source={item.icon} style={styles.categoryIcon} />
                ) : (
                  <Ionicons name="shirt-outline" size={26} color="#666" />
                )}
              </View>
              <Text style={styles.categoryLabel}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  const renderTrendingProducts = () => {
    return (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Products</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterTabs}>
          <TouchableOpacity style={[styles.filterTab, styles.activeFilterTab]}>
            <Text style={[styles.filterTabText, styles.activeFilterTabText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Shoes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productsGrid}>
          {trendingProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <View style={styles.productImageContainer}>
                {product.image ? (
                  <Image source={product.image} style={styles.productImage} resizeMode="cover" />
                ) : (
                  <View style={[styles.productImage, {backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center'}]}>
                    <Ionicons 
                      name={product.id === '1' ? "shirt-outline" : "footsteps-outline"} 
                      size={42} 
                      color="#666" 
                    />
                  </View>
                )}
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name={product.id === '1' ? "heart-outline" : "heart"} size={20} color={product.id === '1' ? "#000" : "#ff3b30"} />
                </TouchableOpacity>
              </View>
              <Text style={styles.productTitle} numberOfLines={2}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  // Main component rendering
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: "main" }]}
        renderItem={() => (
          <>
            {renderHeader()}
            {renderSearchBar()}
            {renderCategories()}
            {renderTrendingProducts()}
          </>
        )}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  scrollContent: {
    paddingBottom: 80, // Added padding for bottom navigation
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  notificationButton: {
    position: 'relative',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ff3b30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    padding: 0,
  },
  voiceButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#000', // Changed from orange to black
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#000', // Changed from orange to black
    fontWeight: '500',
  },
  categoriesContainer: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    width: 75,
  },
  categoryCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden',
  },
  categoryIcon: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
  },
  categoryLabel: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  filterTab: {
    marginRight: 15,
    paddingVertical: 5,
  },
  activeFilterTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000', // Changed from orange to black
  },
  filterTabText: {
    fontSize: 14,
    color: '#999',
  },
  activeFilterTabText: {
    color: '#000',
    fontWeight: '600',
  },
  productsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  productImageContainer: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Changed from orange to black
  },
});

export default HomeScreen;
