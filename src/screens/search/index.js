import React,{useEffect} from 'react';
import {View,Text, VStack, Heading, Input, Icon, Ionicons, ArrowForwardIcon, SearchIcon,MenuIcon, HamburgerIcon, ScrollView, Image, InfoIcon, Pressable} from 'native-base';
import mentor1 from './../../../assets/images/mentor1.png';
import mentor2 from './../../../assets/images/mentor2.png';
import Home from './../../../assets/images/home.png';
import Safari from './../../../assets/images/safari.png';
import Heart from './../../../assets/images/heart.png';
import User from './../../../assets/images/user.png';

import { Animated} from 'react-native';

const SearchMentor = ({navigation}) => {
    return (
        <View bg="white" h="full">
                   
            <View mt="10" ml="6" pt="10" pb="10">
                <FontShrink fontSize="34" fontWeight="bold">
                    Find best
                </FontShrink>
                <FontShrink fontSize="34" color="#8e8e8e">
                    mentor
                </FontShrink>
               
               
            </View>
            <View flexDirection="row">
          
                    <View alignSelf="center" ml="6" rounded="xl" width="2/3">
                        <FadeIn>
                            <Input placeholder="Search" variant="filled" 
                            bg="#f7f7f7"
                            fontSize="18"
                            borderRadius="10" py="3" px="3" p="2" borderWidth="0" 
                            InputLeftElement={<SearchIcon size="5"  p="3" m="3" color="black" />} />
                        </FadeIn>
                    </View>
       
       
                <View alignItems="center" ml="2">
                    <View alignItems="center" bg="black" p="3" rounded="xl" >
                        <HamburgerIcon size="6" color="white"/>
                    </View>
                </View>
            </View>
            <View>
                <FadeIn>
                    <ScrollView horizontal={true} flexDirection="row" ml="6" mt="6">
                        <View bg="#fb985e" pl="8" pr="8" pt="3" pb="3" rounded="xl" ml="3">
                            <Text fontSize="16" color="white" fontWeight="600" >Health</Text>
                        </View>
                        <View bg="#f7f7f7" pl="8" pr="8" pt="3" pb="3" rounded="xl" ml="3">
                            <Text fontSize="16" color="#737373" fontWeight="600" >Business</Text>
                        </View>
                        <View bg="#f7f7f7" pl="8" pr="8" pt="3" pb="3" rounded="xl" ml="3">
                            <Text fontSize="16" color="#737373" fontWeight="600" >Education</Text>
                        </View>
                    </ScrollView>
                </FadeIn>
            </View>
            
            <View ml="6" mr="6" mt="6">
                <View flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Text fontSize="24" fontWeight="bold">Top mentor</Text>
                    <Text fontSize="14" >See All</Text>
                </View>
                <View flexDirection="row" >
                    <View flex="1" mr="4" height="100%" >
                        <Image source={mentor1} alt="mentor1" borderTopRadius="20" width="100%" height="200"  />
                        <View position="absolute" bg="#2f2d2b" bottom="0" rounded="xl" width="100%" p="2">
                            <Text fontSize="14" fontWeight="bold" mt="2" color="white">Jaylon Vaccaro</Text>
                            <Text fontSize="14"  mt="2" color="white">Psycology</Text>
                            <Text fontSize="14"  mt="2" color="white" fontWeight="bold">$25/ 1 hr</Text>
                        </View>
                    </View>
                   
                    <View flex="1" height="100%" >
                        <Pressable onPress={() => navigation.navigate('Mentor')} >
                            <Image source={mentor2} alt="mentor2" borderTopRadius="20" width="100%" height="300" />
                            <View position="absolute" bg="#2f2d2b" bottom="0" rounded="xl" width="100%" p="2">
                                <Text fontSize="14" fontWeight="bold" mt="2" color="white">Jaylon Vaccaro</Text>
                                <Text fontSize="14"  mt="2" color="white">Psycology</Text>
                                <Text fontSize="14"  mt="2" color="white" fontWeight="bold">$25/ 1 hr</Text>
                            </View>
                        </Pressable>
                    </View>
                   
                   
                </View>
            </View>

            <View position="absolute" mb="10" width="100%" flexDirection="row" justifyContent="space-around" bottom="0">
                <View p="2">
                    <Image source={Home}/>
                </View>
                <View p="2">
                    <Image source={Safari}/>
                </View>
                <View p="2">
                    <Image source={Heart}/>
                </View>
                <View p="2">
                    <Image source={User}/>
                </View>
            </View>
 
        </View>
    )
}


const FadeIn = (props) => {
    const animated = new Animated.Value(-60);
    useEffect(() => {
        Animated.timing(
            animated,
          {
            toValue: 0,
            duration: 1000,
          }
        ).start();
      }, [animated])

      return (
        <Animated.View                 // Special animatable View
        style={[{transform: [{translateX: animated}]}]}
        >
            {props.children}
        </Animated.View>
      )

}

const FontShrink = (props) => {
    const animated = new Animated.Value(64);
    useEffect(() => {
        Animated.timing(
            animated,
            {
                toValue: props.fontSize,
                duration: 1000,
            }
        ).start();
    }, [animated])
    return (
        <Animated.Text style={{ ...props.style, fontSize: animated, color:props.color, fontWeight:props.fontWeight}}>{props.children}</Animated.Text>
    )
}

export default SearchMentor