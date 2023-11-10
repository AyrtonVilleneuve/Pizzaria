import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

const CreateAccount = ({ navigation }) => {
    const goToPage = (path) => {
        navigation.navigate(path);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FFF',
                justifyContent: 'center',
                padding: 40,
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    marginBottom: '10%',
                }}
            >
                <Image
                    source={{
                        uri:
                            'https://static.ifood-static.com.br/image/upload/t_high/logosgde/761fa731-38d9-432e-b925-d6db842155da/202008052136_Unrw_.jpeg',
                    }}
                    style={{ width: 200, height: 100 }}
                />
            </View>
            <View>
                <Text>Nome</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: '100%',
                        borderColor: '#848484',
                        borderWidth: 1,
                        marginBottom: '5%',
                        marginTop: '3%',
                    }}
                />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{
                        height: 40,
                        width: '100%',
                        borderColor: '#848484',
                        borderWidth: 1,
                        marginBottom: '5%',
                        marginTop: '3%',
                    }}
                />
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    style={{
                        height: 40,
                        width: '100%',
                        borderColor: '#848484',
                        borderWidth: 1,
                        marginBottom: '5%',
                        marginTop: '3%',
                    }}
                />
            </View>
            <View>
                <Text>Confirmar Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    style={{
                        height: 40,
                        width: '100%',
                        borderColor: '#848484',
                        borderWidth: 1,
                        marginBottom: '5%',
                        marginTop: '3%',
                    }}
                />
            </View>
            <Button onPress={() => { goToPage('Login') }} title='Cadastrar' />
        </View>
    );
};

export default CreateAccount;



