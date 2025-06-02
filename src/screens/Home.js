import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


import espresso from '../../assets/img/espresso.png'
import mocha from '../../assets/img/mocha.png'
import lattle from '../../assets/img/latte.png'
import cappuccino from '../../assets/img/cappuccino.png'
import macciato from '../../assets/img/macciato.png'
import flecha from '../../assets/img/flecha.png'

export default function Home({navigation}) {
  return (
    <View style={estilo.container}>
      <View style={estilo.caixaTexto}>
        <Text style={estilo.titulo}>Escolha o seu Café</Text>
      </View>

      <TouchableOpacity style={estilo.btnCafe} onPress={() =>navigation.navigate('Detalhes')}>
      <View style={estilo.caixa}>
        <Image style={estilo.img} source={espresso}/>
        <Text style={estilo.txtCafe}>Espresso</Text>
      </View>
      <View>
        <Image style={estilo.flecha} source={flecha}/>
      </View>
      </TouchableOpacity>
            <TouchableOpacity style={estilo.btnCafe} onPress={() => {}}>
      <View style={estilo.caixa}>
        <Image style={estilo.img} source={cappuccino}/>
        <Text style={estilo.txtCafe}>Cappuccino</Text>
      </View>
      <View>
        <Image style={estilo.flecha} source={flecha}/>
      </View>
      </TouchableOpacity>
            <TouchableOpacity style={estilo.btnCafe} onPress={() => {}}>
      <View style={estilo.caixa}>
        <Image style={estilo.img} source={mocha}/>
        <Text style={estilo.txtCafe}>Mocha</Text>
      </View>
      <View>
        <Image style={estilo.flecha} source={flecha}/>
      </View>
      </TouchableOpacity>
            <TouchableOpacity style={estilo.btnCafe} onPress={() => {}}>
      <View style={estilo.caixa}>
        <Image style={estilo.img} source={macciato}/>
        <Text style={estilo.txtCafe}>Macciato</Text>
      </View>
      <View>
        <Image style={estilo.flecha} source={flecha}/>
      </View>
      </TouchableOpacity>
            <TouchableOpacity style={estilo.btnCafe} onPress={() => {}}>
      <View style={estilo.caixa}>
        <Image style={estilo.img} source={lattle}/>
        <Text style={estilo.txtCafe}>Lattle</Text>
      </View>
      <View>
        <Image style={estilo.flecha} source={flecha}/>
      </View>
      </TouchableOpacity>
    </View>
  )
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  caixaTexto: {
        paddingTop: 20,
    paddingStart: 15,
  },
  titulo: {
    color: '#B98875',
    fontSize: 28,
    fontWeight: '700',
  },
  btnCafe: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15, 
  },
  caixa: {
    fontSize: 19,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  img:{
    height: 46,
        width: 46,
    resizeMode: 'contain',
  },
  flecha:{
    height: 26,
    width: 26,
  },
  txtCafe: {
    fontSize: 19,
    marginLeft: 20,
    marginTop: 15,
  },

})