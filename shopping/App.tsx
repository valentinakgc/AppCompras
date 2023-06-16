import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyShopping</Text>
      <Text style={styles.text2}>Monte sua lista de compra para te ajudar nas compras</Text>

      <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

          <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text3}> Entrar </Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Recuperar senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9886FC',
    marginBottom: 10,
  },

  text2: {
    fontSize: 14,
    color: '#9886FC',
    marginBottom: 30,
  },

  text3: {
    fontSize: 16,
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 100,
    width: 100,
  },

  input: {
    height: 60,
    margin: 12,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#eaebed',
    borderColor: '#9886FC',
    color: '#bababa',
    fontSize: 15,
    justifyContent: 'center',
  },

    button: {
    backgroundColor: '#35b471',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
    justifyContent: 'center',
  },

  linkContainer: {
    flexDirection: 'row',
    marginTop: 20,
     },
    link: {
     marginRight: 10,
     },
    inkText: {
     color: '#0e0c11',
     fontWeight: 'bold'
     
     },
    
});