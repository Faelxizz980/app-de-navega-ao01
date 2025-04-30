import React  from "react";
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from "react-native";
import clove from  '../../img/clove.jpg';
import jett from '../../img/jett.jpg';
import Icon from "react-native-vector-icons/Ionicons";

export default function Contatos({ navigation }) { // Substituí props por navigation
    return (
        <View style={styles.container}>
            <View style={styles.Menu}>
                <Text style={styles.titulo}>Converse </Text>
                <TextInput style={styles.search} placeholder="Pesquisar" />
            </View>
            <View style={styles.perfil}>
                <Image source={clove} style={styles.contactImage} />
                <Text style={styles.nomeContato}>clove</Text>
                <Text style={styles.conversas}>
                    <Icon name="checkmark-done-outline" style={styles.visu}></Icon> Você: vem cair no meu fiozinho
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <View style={styles.perfil}>
                    <Image source={jett} style={styles.contactImage} />
                    <Text style={styles.nomeContato}>Jett</Text>
                    <Text style={styles.conversas}>
                        <Icon name="checkmark-done-outline" style={styles.visu}></Icon> Jett: Salve careca preta
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    visu:{
       color: '#bbc6ce',
       fontSize: 14,
       fontWeight: 'bold',
       fontFamily: 'sans-serif',  
    },
  container: {
    flex: 1,
    backgroundColor: '#03020e',
  width: '100%',
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'sans-serif',  
    marginTop: 50,
  },

  search: {
    color: '#052e6d',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#3c506e',
    width: '90%',
    height: 40,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 20,
    paddingLeft: 20,
  },
  contactImage: {
    width: 60, // Largura da imagem
    height: 60, // Altura da imagem
    borderRadius: 50, // Torna a imagem circular
    marginTop: 30, // Margem superior
    marginLeft: 20, // Margem esquerda
},
    nomeContato:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        top: 40,
        left: 90,
        fontFamily: 'sans-serif',  
    },
    nomeContato2:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        top: 40,
        left: 90,
        fontFamily: 'sans-serif',  
    },
    conversas:{
        color: '#bbc6ce',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'absolute',
        top: 60,
        left: 90,
        fontFamily: 'sans-serif',  
    },

    outline:{
        color: '#bbc6ce',
       justifyContent: 'flex-end',
    },
});

