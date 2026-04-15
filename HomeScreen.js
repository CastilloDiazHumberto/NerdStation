import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      
      <Image
        source={require("../../assets/wallpaper.jpg")}
        style={styles.banner}
      />

      
      <Text style={styles.sectionTitle}>Productos destacados</Text>

      
      <View style={styles.productsContainer}>
        <Image
          source={require("../../assets/dunem.jpeg")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/superman.jpeg")}
          style={styles.image}
        />
      </View>

      
      <Image
        source={require("../../assets/wallpaper.jpg")}
        style={styles.banner}
      />

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={styles.buttonText}>Ver catálogo</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f89c2c",
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    resizeMode: "contain",
  },

  banner: {
    width: "90%",
    height: 180,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30,
  },

  productsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    elevation: 5, // sombra
  },

  button: {
    backgroundColor: "#000",
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});