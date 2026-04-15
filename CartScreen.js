import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function CartScreen({ cart, setCart }) {

  
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  
  const clearCart = () => {
    setCart([]);
  };

  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🛒 Carrito</Text>

      
      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            
            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price} MXN</Text>
            </View>

            
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.delete}>🗑️</Text>
            </TouchableOpacity>

          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Tu carrito está vacío</Text>
        }
      />

      
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${total} MXN</Text>

        
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.clearText}>Vaciar carrito</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f89c2c",
    padding: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#111",
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: 60,
    height: 80,
    resizeMode: "contain",
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    fontSize: 14,
    color: "#e67e22",
  },

  delete: {
    fontSize: 22,
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#333",
  },

  footer: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 10,
  },

  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  clearButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  clearText: {
    color: "#fff",
    fontWeight: "bold",
  },
});