import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import Banner from "./components/Banner";
import BrandsList from "./components/BrandsList";
import Categories from "./components/Categories";
import CTA from "./components/CTA";
import FlashSales from "./components/FlashSales";
import Header from "./components/Header";
import NewArrivals from "./components/NewArrivals";
import Recommended from "./components/Recommended";
import TopSellers from "./components/TopSellers";

const HomeScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Add your refresh logic here (e.g., fetch data)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <Header styles={styles} />
      <FlatList
        data={[{ key: "main" }]}
        renderItem={() => (
          <>
            <Banner styles={styles} />
            <FlashSales styles={styles} />
            <Categories styles={styles} />
            <TopSellers styles={styles} />
            <NewArrivals styles={styles} />
            <Recommended styles={styles} />
            <BrandsList styles={styles} />
            <CTA />
          </>
        )}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  headerCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 16,
    padding: 20,
    paddingBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: "#100C08",
  },
  headerGreeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#100C08",
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 14,
    color: "#2A2A2A",
    marginBottom: 18,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#100C08",
    backgroundColor: "transparent",
    padding: 0,
  },
  searchIcon: {
    marginLeft: 6,
  },
  categoriesWrapper: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingLeft: 16,
    marginBottom: 8,
  },
  categoryItem: { alignItems: "center", marginRight: 20 },
  categoryCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    overflow: "hidden",
  },
  categoryIcon: { fontSize: 28 },
  categoryLabel: { fontSize: 13, color: "#2A2A2A", fontWeight: "500" },
  banner: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    height: 120,
    position: "relative",
    justifyContent: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  bannerContent: {
    position: "absolute",
    left: 16,
    top: 18,
    zIndex: 2,
  },
  bannerTitle: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  bannerSubtitle: { color: "#fff", fontSize: 14, marginTop: 2 },
  bannerCode: { color: "#fff", fontSize: 12, marginTop: 2, marginBottom: 8 },
  bannerButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: "flex-start",
  },
  bannerButtonText: { color: "#100C08", fontWeight: "bold", fontSize: 14 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#100C08" },
  viewAll: { color: "#888", fontSize: 14 },
  productCard: {
    width: 140,
    backgroundColor: "#f8f8f8",
    borderRadius: 16,
    marginRight: 16,
    padding: 10,
    position: "relative",
    alignItems: "center",
  },
  productImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
  },
  newBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#100C08",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 2,
  },
  newBadgeText: { color: "#fff", fontSize: 11, fontWeight: "bold" },
  productTitle: {
    fontSize: 13,
    color: "#2A2A2A",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 8,
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 2,
    elevation: 2,
  },
  storeName: {
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: "900",
    color: "#100C08",
    fontFamily: "GothamBold",
  },
});

export default HomeScreen;
