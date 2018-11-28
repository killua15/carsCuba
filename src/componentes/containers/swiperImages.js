import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Slide from '../components/slide';
var swipers = []
export default class SwipeImages extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            
                <Swiper style={styles.wrapper}
                    dotColor='#fff'
                    activeDotColor='#FAD80A'
                    showsButtons={false}
                    autoplay={true}>
                    {
                        this.props.imagesSwipe.map(el => {
                            return (
                                <Slide source={el}></Slide>
                            )
                        })

                    }


                </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        // flex:
        //marginTop:10
    },

})