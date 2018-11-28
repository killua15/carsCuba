import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Icon, Divider } from 'react-native-elements';
import { Container, Content, Button, Item, Card, CardItem, Left, Body, Right } from 'native-base';
import HeaderBar from '../components/headerBar'
import SwiperImages from './swiperImages'
import ContactoAction from '../components/contactosAction'
import DataCarros from '../components/dataCarros';
import HeaderScroll from '../components/animateHeader'
import { sanFranciscoWeights } from 'react-native-typography'
var item
var imagesSwipe
export default class Details extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        console.log(props)
        const { navigation } = this.props
        item = navigation.getParam('item', "")
        imagesSwipe = []
        if (item.foto1_car_taxi != null) {
            imagesSwipe.push(item.foto1_car_taxi)
        }
        if (item.foto2_car_taxi != null) {
            imagesSwipe.push(item.foto2_car_taxi)
        }
        if (item.foto3_car_taxi != null) {
            imagesSwipe.push(item.foto3_car_taxi)
        }
    }
    onHandleBackButton = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <Container>
                <HeaderBar
                    onHandleBackButton={this.onHandleBackButton}
                    backIcon={true}
                    title="Detalles"
                    color='#FFC300' />

                <Grid style={styles.grid_cardview} >
                    <Row style={styles.row_nombre}>
                        <Left style={styles.left_name}><Text style={sanFranciscoWeights.bold}>MITSUBICHI LANCER</Text></Left>
                        <Right>
                            <Row>

                                <Icon
                                    name='currency-usd'
                                    type='material-community'
                                    color='#000'
                                //size={12}
                                />
                                <Text style={{ ...sanFranciscoWeights.semibold, marginTop: 10 }}>354000 CUC</Text>

                            </Row>


                        </Right>
                        <Right style={styles.right_heart}>
                            <TouchableOpacity
                                onPress={() => console.log('hello')} >
                                <Icon
                                    name='heart'
                                    type='font-awesome'
                                    color='#5991f9'
                                  />
                            </TouchableOpacity>
                        </Right>
                    </Row>
                </Grid>

                <SwiperImages imagesSwipe={imagesSwipe} item={item}></SwiperImages>

                <ContactoAction></ContactoAction>
                <View style={{ flex: 1.8 }}>
                    <DataCarros item={item}></DataCarros>
                </View>
            </Container>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',

    },
    text_name: {
        marginTop: 10,
        textAlign: 'center'

    },
    grid_cardview: {
        //marginLeft: 10,
        // marginRight: 10,
        flex: 0.2,
        backgroundColor: '#FFC300'


    },
    row_nombre: {
        height: 40,
        marginTop: 10,
        //backgroundColor: 'red'
    },
    right_heart: {
        flex: 0.2,
        marginRight: 10
    },
    left_name: {
        marginLeft: 10
    },

})