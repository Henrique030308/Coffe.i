import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import imgInicial from "../../assets/img/inicial.png.png"

export default function Inicial({navigation }) {
  return (
    <View style={estilo.container}>
      <Image
      style={estilo.img}
        source={imgInicial}
        />

      <View style={estilo.titulo}>
        <Text style={estilo.TextP1}>O Melhor <Text style={estilo.TextP2}>Café</Text> </Text>
        <Text style={estilo.TextP3}>da Cidade</Text>
      </View>
      <View style={estilo.btnContainer}>
        <TouchableOpacity style={estilo.btnCadastrar}>
          <Text style={estilo.txtCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
                  <TouchableOpacity style={estilo.btnEntrar} onPress={() =>navigation.navigate('TabNavigator')}>
          <Text style={estilo.txtEntrar}>Entrar</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}



const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    marginTop: 90,
    marginBottom: 20,
  },
  titulo: {
    alignItems: 'center',
  },
  TextP1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
    TextP2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B98875',
  },
    TextP3: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
    btnCadastrar:{
    borderRadius: 24,
    backgroundColor: '#B98875',
    borderStyle: 'solid',
    borderColor: '#B98875',
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginRight: 10,
  },
  txtCadastrar: {
    color: '#fff',
    fontSize: 22,
  },
      btnEntrar:{
      borderRadius: 24,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#B98875',
    borderWidth: 2,
    paddingHorizontal: 51,
    paddingVertical: 10,
  },
    txtEntrar: {
    color: '#B98875',
    fontSize: 22,
  },
});