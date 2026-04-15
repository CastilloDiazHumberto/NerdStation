import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const products = [
    {
      id: "1",
      name: "Mesias de Dune",
      price: 250,
      image: require("../../assets/dunem.jpeg"),
      description: "Atrapado por su propia yihad y visiones prescientes, Paul enfrenta una conspiración de la Bene Gesserit, Bene Tleilax y la Cofradía.",
    },
    {
      id: "2",
      name: "Absolute Superman",
      price: 199,
      image: require("../../assets/superman.jpeg"),
      description: "Reinventa al héroe en un universo alternativo donde Kal-El no es criado por los Kent. Esta versión, más oscura y trabajadora, creció en Krypton hasta los 13 años y llega a la Tierra solo, desorientado y con rabia, enfrentando un mundo industrial hostil en lugar de una granja idílica.",
    },
    
    {
      id: "3",
      name: "Las Brigadas Fantasma",
      price: 250,
      image: require("../../assets/lbf.jpeg"),
      description: "soldados híbridos especiales, creados con ADN de difuntos, deben capturar a un científico traidor, Charles Boutin, quien ha aliado a razas alienígenas contra la humanidad. ",
    },
    {
      id: "4",
      name: "Chrononauts",
      price: 125,
      image: require("../../assets/chrononauts.webp"),
      description: "sigue a los genios científicos Corbin Quinn y Danny Reilly, quienes crean la primera máquina del tiempo. Cuando el primer viaje tripulado sale mal, se convierten en viajeros temporales temerarios que saltan de la Antigua Roma a los años 2000, causando caos histórico y aventuras salvajes.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Catálogo de productos</Text>

        
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Carrito")}
        >
          <Text style={styles.cartButtonText}>🛒 Carrito</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f89c2c",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },
  cartButton: {
    backgroundColor: "#e67e22",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 20,
  }
});