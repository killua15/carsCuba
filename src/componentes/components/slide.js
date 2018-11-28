import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
const Slide = (props) =>{
     return (
        <View style={styles.slide}>
        <Image style={styles.imagen} resizeMode='stretch' source={{uri:'data:image/png;base64,' + props.source}}></Image>
    </View>
     )
}
const styles = StyleSheet.create({

    slide: {
        flex: 1,
        justifyContent: 'center',
        //paddingLeft:5,
        //paddingRight:5,
      //  height:150
    },
    imagen:{
        flex: 1,
        backgroundColor: 'transparent'
    }
})
export default Slide