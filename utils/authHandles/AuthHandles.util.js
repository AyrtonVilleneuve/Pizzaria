
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "../../firebaseconfig";

import { Alert } from "react-native";

// Funções de requisições com o firebase
// OnSucess => Uma função que será executada após o sucesso da requisição.

export const  SignIn = async (email,password, onSucess) => {

   //Realiza o login usando o email e senha do usuário

    signInWithEmailAndPassword(Auth,email,password).then(() => {
     onSucess()
     
    }).catch((error) => {

     if(error.code === 'auth/missing-email' | error.code === 'auth/invalid-credential'){
        Alert.alert('Usuário não encontrado','Email ou senha incorretos')
     } 


    })
}


export const SignUp = async (email,password, onSucess) => {

   //Realiza a criação de uma conta usando o email e usuário também

   createUserWithEmailAndPassword(Auth,email,password).then(() => {
      
      onSucess()
   }).catch((error) => {
      console.log(error)
   })
}

export const PasswordReset = async (email, onSucess) => {

   //Realiza o reset da senha mandando um email para redefinir

   sendPasswordResetEmail(Auth,email).then(() => {
      onSucess()
   }).catch((error) => {
      throw error
   })
}