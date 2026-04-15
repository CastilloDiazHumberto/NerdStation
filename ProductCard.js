import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, navigation, description, }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          name,
          price,
          image,
          description,
        })
      }
    >
      
      <Image source={image} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    backgroundColor: "#038abf"
  },
  infoContainer: {
    padding: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#2ecc71",
    marginTop: 6,
  },
});