import React from 'react'
import AnimatedHeader from 'react-native-animated-header';
import SwipeImages from '../containers/swiperImages'
import { Header, Left, Icon, Button, Right, Body, Title } from 'native-base'
import { View, Text, Dimensions, Animated, ScrollView, StyleSheet } from 'react-native'
import HeaderBar from './headerBar';
const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 100;

const { width: SCREEN_WIDTH } = Dimensions.get("screen")

const HeaderScroll = (props) => {
    this.state = {
        scrollY: new Animated.Value(0),
        collapsed: false
    }
    const headerHeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const headerTitle = 'HEADER'

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <SwipeImages imagesSwipe={props.imagesSwipe} item={props.item}></SwipeImages>
            </Animated.View>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: this.state.scrollY
                            }
                        }
                    }],
                )

                }
                scrollEventThrottle={16}>
                <Text style={styles.title}>This is Title</Text>
                <Text style={styles.content}>sdasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaaaaaaadasddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#eaeaea',
    },
    scrollContainer: {
        padding: 16,
        paddingTop: HEADER_EXPANDED_HEIGHT
    },
    header: {
       // backgroundColor: 'lightblue',
        position: 'absolute',
        width: SCREEN_WIDTH,
        top: 0,
        left: 0,
        zIndex: 9999
    },
    title: {
        marginVertical: 16,
        color: "black",
        fontWeight: "bold",
        fontSize: 24
    },
    content: {
        fontSize: 50
    }
})
export default HeaderScroll