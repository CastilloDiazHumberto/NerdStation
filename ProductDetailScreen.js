import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function ProductDetailScreen({ route, cart, setCart }) {
  const { name, price, image, description } = route.params;

  const addToCart = () => {
    const newProduct = { name, price, image };
    setCart([...cart, newProduct]);
    Alert.alert("Éxito", "Producto agregado al carrito");
  };

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        
        <Image source={image} style={styles.image} />

        
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price} MXN</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

      </ScrollView>

      
      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f89c2c",
  },

  scrollContent: {
    padding: 15,
  },

  image: {
    width: "100%",
    height: 410,
    resizeMode: "contain",
    marginBottom: 15,
  },

  info: {
    flexDirection: "column",
  },

  description: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "400",
    marginBottom: 12,
    fontWeight: "700",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  price: {
    fontSize: 20,
    color: "#f1eeeb",
    fontWeight: "700",
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#22b8e6",
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
