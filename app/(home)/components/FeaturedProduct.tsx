import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = [
  { code: '#D4A373', name: 'Tan' },
  { code: '#4682B4', name: 'Blue' },
  { code: '#A9A9A9', name: 'Grey' },
  { code: '#000000', name: 'Black' },
];
const SIZES = ['S', 'M', 'L', 'XL'];

const FeaturedProduct = () => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].code);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Featured Product</Text>
      <View style={styles.cardShadow}>
        <View style={styles.productCard}>
          {/* Favorite Icon */}
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={() => setIsFavorite((prev) => !prev)}
            activeOpacity={0.7}
          >
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={24}
              color={isFavorite ? '#E94560' : '#888'}
            />
          </TouchableOpacity>
          {/* Product Image with TOP badge */}
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: 'https://galxboy.co.za/cdn/shop/files/angel_T_3.jpg?v=1721995844&width=500' }}
              style={styles.productImage}
            />
            <View style={styles.topLabel}>
              <Text style={styles.topLabelText}>TOP</Text>
            </View>
          </View>
          {/* Product Info */}
          <Text style={styles.productName}>Women Fashion Shoes</Text>
          <Text style={styles.productId}>ID: 1234568277</Text>
          <Text style={styles.category}>Womens Shoes</Text>
          <Text style={styles.price}>R0.00</Text>
          <Text style={styles.description}>
            Sed egestas, ante et vulputate voluptat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, porta et, faucibus adipiscing.
          </Text>
          {/* Color Options */}
          <View style={styles.options}>
            <Text style={styles.optionLabel}>Color:</Text>
            <View style={styles.colorOptions}>
              {COLORS.map((color) => (
                <TouchableOpacity
                  key={color.code}
                  style={[
                    styles.colorBox,
                    { backgroundColor: color.code },
                    selectedColor === color.code && styles.selectedColorBox,
                  ]}
                  onPress={() => setSelectedColor(color.code)}
                  activeOpacity={0.7}
                >
                  {selectedColor === color.code && (
                    <MaterialIcons name="check" size={16} color="#fff" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* Size Options */}
          <View style={styles.options}>
            <Text style={styles.optionLabel}>Size:</Text>
            <View style={styles.sizeOptions}>
              {SIZES.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSizeButton,
                  ]}
                  onPress={() => setSelectedSize(size)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.sizeButtonText,
                      selectedSize === size && styles.selectedSizeButtonText,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCart} activeOpacity={0.8}>
            <MaterialIcons name="shopping-cart" size={22} color="#fff" />
            <Text style={styles.addToCartText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
    letterSpacing: 0.5,
    color: '#2A2A2A',
  },
  cardShadow: {
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
    backgroundColor: '#fff',
  },
  productCard: {
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 18,
    right: 18,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imageWrapper: {
    width: 220,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topLabel: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFD700',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    zIndex: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  topLabelText: {
    color: '#2A2A2A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
    color: '#2A2A2A',
    textAlign: 'center',
  },
  productId: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
    marginBottom: 2,
  },
  category: {
    fontSize: 14,
    color: '#4682B4',
    fontWeight: '600',
    marginBottom: 2,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E94560',
    marginVertical: 6,
  },
  description: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
    lineHeight: 18,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    width: '100%',
    justifyContent: 'flex-start',
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 12,
    color: '#2A2A2A',
    width: 60,
  },
  colorOptions: {
    flexDirection: 'row',
    gap: 10,
  },
  colorBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColorBox: {
    borderColor: '#E94560',
    borderWidth: 2,
  },
  sizeOptions: {
    flexDirection: 'row',
    gap: 10,
  },
  sizeButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: '#f7f7f7',
  },
  selectedSizeButton: {
    backgroundColor: '#E94560',
    borderColor: '#E94560',
  },
  sizeButtonText: {
    fontSize: 15,
    color: '#2A2A2A',
    fontWeight: '500',
  },
  selectedSizeButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E94560',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 18,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowColor: '#E94560',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  addToCartText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default FeaturedProduct;