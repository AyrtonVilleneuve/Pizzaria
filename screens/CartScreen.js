import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { CartItems } from "../context/Context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);

  const placeOrder = () => {
    navigation.navigate("Order")

    setCart([])
  }
  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, key) => (
            <Pressable
              style={{
                backgroundColor: "#740005",
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
              key={key}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                  source={{ uri: item.image }}
                />

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    {item.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 15 }}>
                      {" "}
                      {item.description.substr(0, 30) + "..."}
                    </Text>
                  </View>

                  <Text style={{ color: "white", fontSize: 16 }}>
                    R${item.price * item.quantity}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {total === 0 ? (
         <Pressable
         style={{
           marginBottom: "auto",
           marginTop: "auto",
           alignItems: "center",
           justifyContent: "center",
           height: "100%",
         }}
       >
         <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
           Carrinho Vazio
         </Text>
       </Pressable>
      ) : (
        <View style={{ height: 200 }}>
        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="credit-card" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>R${total}</Text>
            <Text
              style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
            >
              Pagamento na Entrega
            </Text>
          </View>
        </View>
        <Pressable
        onPress={placeOrder}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "green",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Finalizar
          </Text>
        </Pressable>
      </View>
      )}  
     
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});