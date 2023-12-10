import { StyleSheet, Text, View, SafeAreaView ,Image} from "react-native";
import React from "react";

const OrderData = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#740005", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 100,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Pedido recebido
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Tempo estimado de entrega de 45min
        </Text>

        
      </View>

        <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin:10,
          borderRadius:8,
          marginTop:10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#444801" }}>
            Agradecemos a preferência
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Seu pedido chegará em breve!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderData;

const styles = StyleSheet.create({});