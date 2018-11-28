import React from 'react'
import { Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Form, Item, Button, Card, CardItem, Left, Body, Right } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import ContactoAction from './contactosAction';
import {sanFranciscoWeights} from 'react-native-typography'
const ItemListCar = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onHandleItemListCar(props.item)}>
            <Grid style={styles.grid_cardview} >
                <Row style={styles.row_nombre}>
                    <Left style={ styles.left_name}><Text style={sanFranciscoWeights.bold}>MITSUBICHI LANCER</Text></Left>
                    <Right>
                        <Row>
                       
                        <Icon
                            name='currency-usd'
                            type='material-community'
                            color='#000'
                            //size={12}
                            onPress={() => console.log('hello')} />
                             <Text style={{...sanFranciscoWeights.semibold,marginTop:10}}>354000 CUC</Text>
                        </Row>
                        
                    </Right>
                    <Right style={styles.right_heart}>
                    <TouchableOpacity>
                    <Icon
                            name='heart'
                            type='font-awesome'
                            color='#5991f9'
                            onPress={() => console.log('hello')} />
                    </TouchableOpacity>
                        

                    </Right>
                </Row>
                <Row style={styles.row_grid_details}>
                    <Grid style={styles.grid_details}>
                        <Col style={styles.colum_details} size={2}>
                            <Row style={styles.row_car_details}>
                                <Icon
                                    name='user'
                                    type='font-awesome'
                                    color='#000'
                                    size={16}
                                    style={{ marginLeft: 10 }}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ ...sanFranciscoWeights.medium,marginTop: 5, marginLeft: 10, marginRight: 5 }}>5</Text>
                            </Row>
                            <Row style={styles.row_car_details}>
                                <Icon
                                    name='car'
                                    type='font-awesome'
                                    color='#000'
                                    size={16}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ ...sanFranciscoWeights.medium,marginTop: 5, marginLeft: 10, marginRight: 5 }}>Alquiler</Text>
                            </Row>
                            <Row style={styles.row_car_details}>
                                <Icon
                                    name='cog'
                                    type='font-awesome'
                                    color='#000'
                                    size={16}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ ...sanFranciscoWeights.medium,marginTop: 5, marginLeft: 10, marginRight: 5 }}>Automatico</Text>
                            </Row>
                            <Row style={styles.row_car_details}>
                                <Icon
                                    name='weather-windy'
                                    type='material-community'
                                    color='#000'
                                    size={16}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ ...sanFranciscoWeights.medium,marginTop: 5, marginLeft: 10, marginRight: 5 }}>Aire Acondicionado</Text>
                            </Row>
                            <Row style={styles.row_car_details}>
                                <Icon
                                    name='timer-sand-full'
                                    type='material-community'
                                    color='#000'
                                    size={16}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ ...sanFranciscoWeights.medium,marginTop: 5, marginLeft: 10, marginRight: 5 }}>24 Horas</Text>
                            </Row>
                        </Col>
                        <Col style={styles.colum_image} size={2}>
                            <Image
                                style={{ height: 160, borderRadius:10}}
                                resizeMode="stretch"
                                source={{ uri: 'data:image/png;base64,' + props.item.foto1_car_taxi }}
                            ></Image>
                        </Col>
                    </Grid>
                </Row>
                <ContactoAction></ContactoAction>
                <Divider style={{ height: 5, marginTop:5, backgroundColor: '#ededed' }}></Divider>

            </Grid>

        </TouchableOpacity>

    )

}
const styles = StyleSheet.create({
    grid_cardview: {
        marginLeft: 10,
        marginRight: 10


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
    text_left_name: {
        ...sanFranciscoWeights.bold,
        fontWeight: '700'
    },
    row_grid_details: {
        height: 180,
        // backgroundColor: '#3dabbc'
    },
    grid_details: {

    },
    colum_details: {
        // backgroundColor: 'pink'
    },
    colum_image: {
        //backgroundColor: 'blue'
    },
    row_car_details: {
        height: 25,
        marginTop: 5,
        paddingLeft: 10,
        // backgroundColor: 'red'
    }

});

export default ItemListCar