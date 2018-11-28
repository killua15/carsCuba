import React from 'react'
import { SearchBar } from 'react-native-elements'

const SearchBarCars = (props) => {

    return (
        <SearchBar
            containerStyle={{backgroundColor:'#FAD80A'}}
            inputStyle={{backgroundColor:'white'}}
            //onChangeText={someMethod}
            //onClearText={someMethod}
            placeholder='Buscar Carro...' />
    )
}

export default SearchBarCars