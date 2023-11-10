import React from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';

const Login = ({ navigation }) => {
  const goToPage = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      padding: 40
    }}>
      <View style={{
        alignItems: 'center',
        marginBottom: '10%'
      }}>
        {/* Utilize o componente Image para exibir a imagem */}
        <Image
          source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_high/logosgde/761fa731-38d9-432e-b925-d6db842155da/202008052136_Unrw_.jpeg' }}
          style={{ width: 200, height: 100 }}
        />
        <Text style={{
          fontSize: 34,
          color: '#1A1A1A',
          textAlign: 'center'
        }}>Pizzaria República Italiana</Text>
      </View>
      <Text>Login</Text>
      <TextInput style={{
        height: 40,
        width: '100%',
        borderColor: '#848484',
        borderWidth: 1,
        marginBottom: '5%',
        marginTop: '3%'
      }} />
      <Text>Password</Text>
      <TextInput secureTextEntry={true} style={{
        height: 40,
        width: '100%',
        borderColor: '#848484',
        borderWidth: 1,
        marginBottom: '5%',
        marginTop: '3%'
      }} />
      <View style={{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: '5%'
      }}>
        <Text onPress={() => { goToPage('CreateAccount') }} style={{
          color: '#444801',
          marginLeft: '10%'
        }}>Create Account</Text>
        <Text onPress={() => { goToPage('ForgotPassWord') }} style={{
          color: '#444801',
          marginLeft: '10%'
        }}>Forgot Password</Text>
      </View>
      <Button onPress={() => { goToPage('Home') }} title='Enviar'/>
    </View>
  );
};

export default Login;
