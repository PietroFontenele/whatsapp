import firebase from 'firebase/app';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

export const handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Acesso aos dados do usuário
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const photoUrl = user.photoURL;
  
        // Faça o que quiser com os dados do usuário
        console.log('Nome:', name);
        console.log('E-mail:', email);
        console.log('URL da foto de perfil:', photoUrl);
      })
      .catch((error) => {
        // Lida com erros de login
        console.error('Erro ao fazer login com o Google:', error);
      });
  }
  