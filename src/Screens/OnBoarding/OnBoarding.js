import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';

import { images, theme, COLORS, FONTS, SIZE } from '../../Constant'
const { onboarding1, onboarding2, onboarding3 } = images;

//Dummy data
const onBoardings = [
    {
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding3
    }
]
const OnBoarding = () => {

    const [complate,setComplate]=React.useState(false);
    const scrollX=new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZE.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    //Render
    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                scrollEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {nativeEvent:{contentOffset:{x:scrollX}}},
                ],{useNativeDriver:false})}
            >
                {onBoardings.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            width: SIZE.width
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </View>

                        <View style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: 40,
                            right: 40
                        }}>
                            <Text style={{ ...FONTS.h1, color: COLORS.gray, textAlign: 'center' }}>{item.title}</Text>
                            <Text style={{ ...FONTS.body3, textAlign: 'center', marginTop: SIZE.base, color: COLORS.gray }}>{item.description}</Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor:COLORS.blue,
                                position:'absolute',
                                bottom:0,
                                right:0,
                                width:150,
                                height:60,
                                paddingLeft:20,
                                justifyContent:'center',
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30
                            }}
                            onPress={()=>console.log("Bbutton on Press")}
                        >
                            <Text style={{...FONTS.h1,color:COLORS.white}}>{complate?"Let's Go":"Skip"}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }


    function renderDots(){

        const dotPosition=Animated.divide(scrollX,SIZE.width)

        return(
            <View style={styles.dotContainer}>
                {onBoardings.map((item,index)=>{

                    const opacity=dotPosition.interpolate({
                        inputRange:[index-1,index,index+1],
                        outputRange:[0.3,1,0.3],
                        extrapolate:"clamp"
                    })

                    const dotSize=dotPosition.interpolate({
                        inputRange:[index-1,index,index+1],
                        outputRange:[SIZE.base,17,SIZE.base],
                        extrapolate:"clamp"
                    })
                    return(
                        <Animated.View 
                            style={[styles.dot,{width:dotSize,height:dotSize}]}
                            key={`dot-${index}`}
                            opacity={opacity}
                        >

                        </Animated.View>
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    dot:{
        borderRadius:SIZE.radius,
        backgroundColor:COLORS.blue,
        marginHorizontal:SIZE.radius/2
    },
    dotContainer:{
        flexDirection:'row',
        height:SIZE.padding,
        alignItems:'center',
        justifyContent:'center'
    },
    dotRootContainer:{
        position:'absolute',
        bottom:SIZE.height>700?'26%':'15%'
    }
})

export default OnBoarding;