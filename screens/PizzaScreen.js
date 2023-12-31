import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CartItems } from "../context/Context";
import { GetPizzas } from "../utils/database/database.utils";

const PizzaScreen =  () => {

    const [data,setData] = useState([])

    useEffect(() => {

        // Coleta os sabores diretamente do banco de dados
        GetPizzas().then((pizza) => {
            setData(pizza)

        })
    },[])


    const navigation = useNavigation();
    const { cart, setCart } = useContext(CartItems);
    const total = cart
        .map((item) => Number(item.price * item.quantity))
        .reduce((prev, curr) => prev + curr, 0);
    console.log(cart, "cart items added");
    console.log(total, "total price");
    return (
        <SafeAreaView>
            <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back-circle"
                size={24}
                color="black"
            />
            <FlatList
                
                numColumns={2}

                style={{width:'100%'}}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <PizzaComponent pizza={item} key={item.id} />}
            />
            {total === 0 ? null : (
                <Pressable
                    onPress={() => navigation.navigate("Cart")}
                    style={{
                        backgroundColor: "green",
                        padding: 10,
                        position: "absolute",
                        bottom: 100,
                        left: 150,
                        borderRadius: 6,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "white",
                        }}
                    >
                        Go
                    </Text>
                </Pressable>
            )}
        </SafeAreaView>
    );
};




export default PizzaScreen;


