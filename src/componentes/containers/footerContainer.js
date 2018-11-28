import React, { Component } from 'react';
import { Text } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
var home
var alq
var taxi
var sell
var Colorhome
var Coloralq
var Colortaxi
var Colorsell
export default class FooterContainer extends Component {
  constructor(props) {
    super(props)
    this.state ={
       
    }
 

  }
  render() {
    if (this.props.active == 'home') {
      home = true
      alq = false
      taxi = false
      sell = false
      Colorhome = '#5991f9'
      Coloralq ='#FFC300'
      Colortaxi='#FFC300'
      Colorsell='#FFC300'
    } else if (this.props.active == 'alq') {
      home = false
      alq = true
      taxi = false
      sell = false
      Colorhome = '#FFC300'
      Coloralq ='#5991f9'
      Colortaxi='#FFC300'
      Colorsell='#FFC300'
    } else if (this.props.active == 'taxi') {
      home = false
      alq = false
      taxi = true
      sell = false
      Colorhome = '#FFC300'
      Coloralq ='#FFC300'
      Colortaxi='#5991f9'
      Colorsell='#FFC300'
    } else if (this.props.active == 'sell') {
      home = false
      alq = false
      taxi = false
      sell = true
      Colorhome = '#FFC300'
      Coloralq ='#FFC300'
      Colortaxi='#FFC300'
      Colorsell='#5991f9'
    }
    return (
      <Footer style={{ backgroundColor: '#FFC300' }}>
        <FooterTab>
          <Button active={home} style={{backgroundColor:Colorhome}} onPress={() => this.props.onHandleSelectCategories(0)}>
            <Icon active name="home" />
            <Text>Home</Text>
          </Button >
          <Button active={alq} style={{backgroundColor:Coloralq}} onPress={() => this.props.onHandleSelectCategories(1)}>
            <Icon type='material-community' name="car" />
            <Text>Alquileres</Text>
          </Button>
          <Button  style={{backgroundColor:Colortaxi}} active={taxi} onPress={() => this.props.onHandleSelectCategories(2)}>
            <Icon type='material-community' name="taxi" />
            <Text>Taxis</Text>
          </Button>
          <Button active={sell} style={{backgroundColor:Colorsell}} onPress={() => this.props.onHandleSelectCategories(3)}>
            <Icon type='material-community' name="currency-usd" />
            <Text>Ventas</Text>
          </Button>
        </FooterTab>
      </Footer>

    );
  }
}