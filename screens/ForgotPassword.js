import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

const ForgotPassWord = ({ navigation }) => {
  const goToPage = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri:
              'https://static.ifood-static.com.br/image/upload/t_high/logosgde/761fa731-38d9-432e-b925-d6db842155da/202008052136_Unrw_.jpeg',
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Nova Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Confirmar Nova Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <Button onPress={() => goToPage('Login')} title="Recuperar" />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  logo: {
    width: 200,
    height: 100,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#848484',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 3,
  },
};

export default ForgotPassWord;

       

