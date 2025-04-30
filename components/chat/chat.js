import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import jett from '../../img/jett.jpg';
import cypher from '../../img/cypher.jpg';
import giphySticker from '../../img/giphy.gif';
import Icon from "react-native-vector-icons/Ionicons";

export default function Chat({ navigation }) { // Recebe o objeto navigation
    const [message, setMessage] = useState(""); // Estado para capturar a mensagem

    return (
        <ImageBackground source={cypher} style={styles.wallpaper}>
            <KeyboardAvoidingView
                style={styles.overlay}
                behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajusta o layout no iOS e Android
            >
                <View style={styles.container}>
                    <View style={styles.menu}>
                        {/* Botão de voltar */}
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back-outline" style={styles.iconVoltar} />
                        </TouchableOpacity>
                        <Image source={jett} style={styles.fotoPerfil} />
                        <Text style={styles.nome}>Jett</Text>
                        <Icon name="videocam-outline" style={styles.iconsMenu}></Icon>
                        <Icon name="call-outline" style={styles.iconsMenu}></Icon>
                    </View>

                    {/* Balões de conversa */}
                    <View style={styles.chatContainer}>
                        {/* Balão do Cypher */}
                        <View style={styles.balaoDestinatario}>
                            <Text style={styles.textoBalao}>Jett, você está pronta para a missão?</Text>
                        </View>

                        {/* Balão da Jett */}
                        <View style={styles.balaoRemetente}>
                            <Text style={styles.textoBalao}>Sempre pronta, Cypher! Vamos detonar.</Text>
                        </View>

                        <View style={styles.balaoDestinatario}>
                            <Text style={styles.textoBalao}>Lembre-se, eu estarei de olho em tudo.</Text>
                        </View>

                        {/* Balão da Jett */}
                        <View style={styles.balaoRemetente}>
                            <Text style={styles.textoBalao}>Haha, claro! Só não se perca nas suas câmeras.</Text>
                        </View>

                        {/* Balão do Cypher */}
                        <View style={styles.balaoDestinatario}>
                            <Text style={styles.textoBalao}>Eu nunca me perco, Jett. Boa sorte.</Text>
                        </View>

                        <View style={styles.balaoDestinatario}>
                            <Image
                                source={giphySticker}
                                style={styles.sticker}
                            />
                        </View>
                    </View>

                    {/* Caixa de entrada flutuante */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua mensagem..."
                            placeholderTextColor="#aaa"
                            value={message}
                            onChangeText={setMessage}
                        />
                        <TouchableOpacity onPress={() => alert(`Mensagem enviada: ${message}`)}>
                            <Icon name="send-outline" style={styles.sendIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    wallpaper: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 25,
    },
    iconVoltar: {
        fontSize: 24,
        color: '#fff',
        marginRight: 10,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    nome: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    iconsMenu: {
        fontSize: 24,
        color: '#fff',
        marginLeft: 10,
    },
    chatContainer: {
        flex: 1,
        padding: 10,
    },
    balaoRemetente: {
        alignSelf: 'flex-start',
        backgroundColor: '#bbc6ce',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '70%',
    },
    balaoDestinatario: {
       
        alignSelf: 'flex-end',
        backgroundColor: '#3c506e',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '70%',
    },
    textoBalao: {
        color: '#fff',
        fontSize: 16,
    },
    sticker: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#3c506e',
        borderTopWidth: 1,
        borderTopColor: '#555',
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    sendIcon: {
        fontSize: 24,
        color: '#fff',
        marginLeft: 10,
    },
});
