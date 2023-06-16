import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
        />
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart" size={24} color="green" />
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        {/* Produto: Café */}
        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>Café</Text>
            <Text style={styles.itemQuantity}>Quantidade: 2</Text>
          </View>
          <View style={styles.itemButtons}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.buttonText}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trashButton}>
              <Text style={styles.buttonText}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Produto: Pacote de arroz */}
        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>Pacote de arroz</Text>
            <Text style={styles.itemQuantity}>Quantidade: 1</Text>
          </View>
          <View style={styles.itemButtons}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.buttonText}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trashButton}>
              <Text style={styles.buttonText}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Produto: Suco de laranja */}
        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>Suco de laranja</Text>
            <Text style={styles.itemQuantity}>Quantidade: 3</Text>
          </View>
          <View style={styles.itemButtons}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.buttonText}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trashButton}>
              <Text style={styles.buttonText}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    height: 40,
    marginRight: 10,
    paddingHorizontal: 10,
    color: '#bababa',
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  itemContainer: {
    width: '80%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  itemInfo: {
    flex: 1,
  },
  itemButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#999',
    marginRight: 10,
  },
  checkButton: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  trashButton: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#bababa',
    fontWeight: 'bold',
    fontSize: 16,
  },
});