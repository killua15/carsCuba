import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Left, ActionSheet } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import { Grid, Col, Row } from 'react-native-easy-grid';
var BUTTONS = ["54008681", "76426556", "Cancel"]
var DESTRUCTIVE_INDEX = 3
var CANCEL_INDEX = 4
const ContactoAction = (props) => {
    renderActonSheet = () => {
        ActionSheet.show({
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            title: "Contacto LLamada"
        },
            (buttonIndex) => {
                console.log(BUTTONS[buttonIndex])
            })
    }
    return (
        <Row style={styles.contacto_speed}>
            <Left>
                <TouchableOpacity onPress={renderActonSheet}>
                    <Icon name='call' ></Icon>
                </TouchableOpacity>
            </Left>
            <Left>
                <TouchableOpacity onPress={renderActonSheet}>
                    <Icon name='sms' ></Icon>
                </TouchableOpacity>
            </Left>
            <Left>
                <TouchableOpacity onPress={renderActonSheet}>
                    <Icon name='mail' ></Icon>
                </TouchableOpacity>
            </Left>
            <Left>
                <TouchableOpacity >
                    <Icon name='person' ></Icon>
                </TouchableOpacity>
            </Left>
        </Row>
    )
}
const styles = StyleSheet.create({
    contacto_speed: {
        paddingTop: 5,
        height: 40,
        // marginLeft: 5,
        // marginRight: 5,
        paddingLeft: Dimensions.get('screen').width / 6,
       // backgroundColor: '#FFC300',
        //marginBottom: 5
    }
});
export default ContactoAction