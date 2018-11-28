import React, { Component } from 'react'
import { Platform, StyleSheet, FlatList } from 'react-native'
import { List, ListItem} from 'react-native-elements'
import { View } from 'native-base';
import ItemListCar from '../components/itemListCar'
type Props = {};
class ListCars extends Component {
    constructor(props) {
        super(props);
    }
    onHandleItemListCar = (item) =>{
        console.log(this.props)
        this.props.navigation.navigate('Details',{item:item})
    }
   
    renderRow = ({ item }) => {
        //console.log(item)
        return (
            <ItemListCar
               onHandleItemListCar={this.onHandleItemListCar}
               item={item}
            />
        )
    }
    render() {
       
        return (
            
                <FlatList
                style={{borderColor:'#ededed',borderTopWidth:3, marginTop:5}}
                    data={this.props.taxis.data}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.name}
                />
           
        )
    }
}


export default ListCars