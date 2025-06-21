import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Header = ({ styles }: any) => (
  <View style={styles.headerCard}>
    <View style={styles.headerTopRow}>
      <TouchableOpacity>
        <Ionicons name="menu" size={28} color="#100C08" />
      </TouchableOpacity>
      <Text style={styles.storeName}>Inklo</Text>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={28} color="#100C08" />
      </TouchableOpacity>
    </View>
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Let's find the perfect fit ..."
        placeholderTextColor="#888"
      />
      <Ionicons
        name="search"
        size={22}
        color="#100C08"
        style={styles.searchIcon}
      />
    </View>
  </View>
);

export default Header;
