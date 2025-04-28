import React from "react";
import { StyleSheet, Text, View, Image } from "react-native"; // Adicionado Image
import Icon from "react-native-vector-icons/Ionicons";
import clove from '../../img/clove.jpg'; // Importando a imagem de clove
import jett from '../../img/jett.jpg'; // Importando a imagem de jett
import Raze from '../../img/raze.jpg';
import Gekko from '../../img/gekko.jpg';
import Omen  from '../../img/omen.jpg';
import Tejo from '../../img/tejo.jpg';
import { ScrollView } from "react-native-web";
export default function Ligacoes() {
    return (
        <View style={styles.Container}>
            <ScrollView>
            <View style={styles.menu}>
                <Text style={styles.titulo}>Ligações</Text>
                <Icon name="search-outline" style={styles.icon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={clove} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Clove</Text>
                    <Text style={styles.conversas}>Última ligação: 10:30am</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={jett} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Jett</Text>
                    <Text style={styles.conversas}>Última ligação: 12:30pm</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Tejo} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Tejo</Text>
                    <Text style={styles.conversas}>Última ligação: 1:00am</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Raze} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Raze</Text>
                    <Text style={styles.conversas}>Última ligação: 15:56pm</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Gekko} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Gekko</Text>
                    <Text style={styles.conversas}>Última ligação: 13:30pm</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={jett} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Jett</Text>
                    <Text style={styles.conversas}>Última ligação: 2:30am</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Omen} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Omen</Text>
                    <Text style={styles.conversas}>Última ligação: 4:50am</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Raze} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Raze</Text>
                    <Text style={styles.conversas}>Última ligação: 12:30pm</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Gekko} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Gekko</Text>
                    <Text style={styles.conversas}>Última ligação: 16:40pm</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            <View style={styles.ligacoes}>
                <Image source={Tejo} style={styles.contactImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.nomeContato}>Tejo</Text>
                    <Text style={styles.conversas}>Última ligação: 3:00am</Text>
                </View>
                <Icon name="call-outline" style={styles.callIcon} />
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#03020e',
        width: '100%',
    },
    menu: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 20, 
        marginTop: 50,
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    icon: {
        color: '#fff',
        fontSize: 30, 
    },
    contactImage: {
        width: 60, // Largura da imagem
        height: 60, // Altura da imagem
        borderRadius: 50, // Torna a imagem circular
        marginLeft: 10, // Margem esquerda
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    nomeContato:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',  
    },
    conversas:{
        color: '#bbc6ce',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',  
    },
    ligacoes: { // Renomeado de 'Ligações' para 'ligacoes'
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Espaça os itens
        marginTop: 30,
        paddingHorizontal: 10,
    },
    callIcon: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'flex-end', // Garante que o ícone fique no final
    },
});