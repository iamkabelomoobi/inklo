import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const BrandsList = ({ styles }: any) => {
  const brands = [
    {
      key: "nike",
      label: "Nike",
      uri: "https://img.icons8.com/?size=100&id=16647&format=png&color=000000",
    },
    {
      key: "adidas",
      label: "Adidas",
      uri: "https://img.icons8.com/?size=100&id=34543&format=png&color=000000",
    },
    {
      key: "jeep",
      label: "Jeep",
      uri: "https://img.icons8.com/?size=100&id=okpku_cVylpQ&format=png&color=000000",
    },
    {
      key: "converse",
      label: "Converse",
      uri: "https://img.icons8.com/?size=100&id=HP2JLQwYrYfL&format=png&color=000000",
    },
    {
      key: "vans",
      label: "Vans",
      uri: "https://img.icons8.com/?size=100&id=4dOS28ObNtM6&format=png&color=000000",
    },
    {
      key: "puma",
      label: "Puma",
      uri: "https://img.icons8.com/?size=100&id=y1Xhdefsvem0&format=png&color=000000",
    },
    {
      key: "reebok",
      label: "Reebok",
      uri: "https://img.icons8.com/?size=100&id=4dOS28ObNtM6&format=png&color=000000",
    },
    {
      key: "underarmour",
      label: "Under Armour",
      uri: "https://img.icons8.com/?size=100&id=4dOS28ObNtM6&format=png&color=000000",
    },
  ];

  return (
    <View  style={[styles.section, { marginBottom: 0 }]}>
      <Text style={[styles.sectionTitle, { marginLeft: 16 }]}>
        Shop Designer Brands
      </Text>
      <View style={styles.categoriesWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {brands.map((brand) => (
            <View style={styles.categoryItem} key={brand.key}>
              <Image
                source={{ uri: brand.uri }}
                style={styles.categoryCircle}
                resizeMode="contain"
              />
              <Text style={styles.categoryLabel}>{brand.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default BrandsList;
