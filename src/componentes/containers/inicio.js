/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderBar from '../components/headerBar'
import SearchBarCars from '../components/searchBarCars'
import FooterContainer from './footerContainer'
import ListCars from './listCars'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchTaxis } from '../../redux/actions/TaxisActions'
import { sanFranciscoWeights } from 'react-native-typography'
import Spinner from 'react-native-loading-spinner-overlay';
type Props = {};
class Inicio extends Component<Props> {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state={
        itemSelect:0,
        activeFooterButton:'home'
    }
  }
  componentDidMount() {
    this.props.fetchTaxis(0)
   // console.log("Inicio Comonente")
  }
  shouldComponentUpdate(nP, nS){
      if(JSON.stringify(this.state.itemSelect) !== JSON.stringify(nS.itemSelect) ){
        console.log(nS.itemSelect)
        this.props.fetchTaxis(nS.itemSelect)
        if(nS.itemSelect == 1){
           this.setState({activeFooterButton:'alq'})
        }else if(nS.itemSelect == 2){
          this.setState({activeFooterButton:'taxi'})
        }
        else if(nS.itemSelect == 3){
          this.setState({activeFooterButton:'sell'})
        }
        else if(nS.itemSelect == 0){
          this.setState({activeFooterButton:'home'})
        }
      }
      return true
  }
  onHandleSelectCategories = (v) => {
      this.setState({itemSelect:v})
  }
  render() {
    //this.props.fetchTaxis(0)
    const { taxis } = this.props
    const { isFeching } = taxis
    if (isFeching == false) {
      // console.log(isFeching)
      console.log(taxis.data)
      // console.log(list)
    }
    console.log(this.props)
    return (
      <Container>
        <HeaderBar navigation={this.props.navigation} title="Booking Cars" backIcon={false} color='#FFC300'> </HeaderBar>
        {/* <SearchBarCars></SearchBarCars> */}
        <Content>
           {isFeching == true ?
                <Spinner
                visible={isFeching}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
                color="#5991f9"
              />
             :
             <ListCars taxis={taxis} isFeching={isFeching} navigation={this.props.navigation}></ListCars>

          }
        </Content>
        <FooterContainer active={this.state.activeFooterButton} onHandleSelectCategories={this.onHandleSelectCategories}></FooterContainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spinnerTextStyle: {
    color: '#5991f9'
  },
});
const mapStateToProps = (state) => {
  const { taxis } = state
  return { taxis }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchTaxis: (val) => dispatch(fetchTaxis(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inicio) 
