import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Right, Left, Card, CardItem, Body, Footer } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import SwipeImages from '../containers/swiperImages';
import { sanFranciscoWeights } from 'react-native-typography'
const DataCarros = (props) => {
    console.log(Dimensions.get('screen').width)
    return (
        <ScrollView >
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
                            <Text style={{ ...sanFranciscoWeights.medium, marginTop: 5, marginLeft: 10, marginRight: 5 }}>5</Text>
                        </Row>
                        <Row style={styles.row_car_details}>
                            <Icon
                                name='car'
                                type='font-awesome'
                                color='#000'
                                size={16}
                                onPress={() => console.log('hello')} />
                            <Text style={{ ...sanFranciscoWeights.medium, marginTop: 5, marginLeft: 10, marginRight: 5 }}>Alquiler</Text>
                        </Row>
                        <Row style={styles.row_car_details}>
                            <Icon
                                name='cog'
                                type='font-awesome'
                                color='#000'
                                size={16}
                                onPress={() => console.log('hello')} />
                            <Text style={{ ...sanFranciscoWeights.medium, marginTop: 5, marginLeft: 10, marginRight: 5 }}>Automatico</Text>
                        </Row>
                    </Col>
                    <Col style={styles.colum_details} size={2}>
                        <Row style={styles.row_car_details}>
                            <Icon
                                name='weather-windy'
                                type='material-community'
                                color='#000'
                                size={16}
                                onPress={() => console.log('hello')} />
                            <Text style={{ ...sanFranciscoWeights.medium, marginTop: 5, marginLeft: 10, marginRight: 5 }}>Aire Acondicionado</Text>
                        </Row>
                        <Row style={styles.row_car_details}>
                            <Icon
                                name='timer-sand-full'
                                type='material-community'
                                color='#000'
                                size={16}
                                onPress={() => console.log('hello')} />
                            <Text style={{ ...sanFranciscoWeights.medium, marginTop: 5, marginLeft: 10, marginRight: 5 }}>24 Horas</Text>
                        </Row>
                    </Col>
                </Grid>
            </Row>

            {
                props.item.desc == "" ?
                    null
                    :
                    <Card >
                        <CardItem style={{ backgroundColor: '#FFC300', marginBottom: 10 }} header bordered>
                            <Text style={sanFranciscoWeights.heavy}>Descripcion</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={sanFranciscoWeights.medium}>{props.item.desc}</Text>
                            </Body>
                        </CardItem>
                    </Card>
            }


        </ScrollView>

    )
}
const styles = StyleSheet.create({
    grid_cardview: {
        // marginLeft: 10,
        // marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#ededed'


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
        fontStyle: 'italic',
        fontWeight: '700'
    },
    row_grid_details: {
        height: null,
        borderWidth: 2,
        marginTop:10,
        borderColor: '#ededed',
        // margin:10
        // backgroundColor: '#3dabbc'
    },
    grid_details: {
        marginTop:10
    },
    colum_details: {
        // marginTop:10,
        // marginBottom:10
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

})
export default DataCarros