
import { StyleSheet, Text, View } from "react-native";
import { BasketContext, UserProvider } from "./context/Context";

import StackNavigator from "./routes/StackNavigator.route";

export default function App() {
  return (
    <BasketContext>
      <UserProvider>
       <StackNavigator />
      </UserProvider>
    </BasketContext>
  );
}
