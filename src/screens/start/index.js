import { ArrowForwardIcon, Center, Image, Pressable, Text, View } from 'native-base';
import React, {useRef, useEffect} from 'react';
import { Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cloud from '../../../assets/images/cloud.png';
import RocketPerson from '../../../assets/images/rocket-person.png';

const Start = ({navigation}) => {
    return (
        <View flexDirection="column" top="0" bg="white" h="full">
   
            <LinearGradient colors={['#ffb993', '#ffd6bf', '#ffffff']} style={{height:"60%",backgroundColor:"#fed8c0"}}>
                  <SlideLoop startPoint={900} duration={7000}  style={{marginTop:50, position:"absolute"}}>
                    <Image position="absolute" source={Cloud} style={{ width: 150, height: 120 }} />
                  </SlideLoop>
                  <SlideLoop startPoint={400} duration={6000}  style={{marginTop:250, position:"absolute"}}>
                    <Image position="absolute" source={Cloud} style={{ width: 150, height: 120 }} />
                  </SlideLoop>
                  <SlideLoop startPoint={700} duration={5000} style={{marginTop:400, position:"absolute"}}>
                    <Image position="absolute" source={Cloud} style={{ width: 60, height: 40 }} />
                  </SlideLoop>
                  <View style={{marginTop:40,alignItems:"center"}}>
                    <UpDown>
                      <Image source={RocketPerson} />
                    </UpDown>
                  </View>
            
               
            </LinearGradient>
        

         
      

            <View>
                <FadeInView style={{alignItems:"center",paddingLeft:10, paddingRight:10}}>
                    <Text fontSize="30" fontWeight="bold">Find your mentor as quickly as possible</Text>
                </FadeInView>
            </View>
            <View alignItems="center" pl="12" pr="12" justifyContent="center">
                <FadeInView style={{width: 250, height: 50}}>
                    <Text fontSize="16" fontWeight="normal" text="center">Thanks to real review, finding your mentor has become so easy</Text>
                </FadeInView>
            </View>
            <View alignItems="center">
              <Pressable onPress={() => navigation.navigate('SearchMentor')}>
              <View style={{alignItems:"center",padding:10, backgroundColor:"#fb985e",borderRadius:50, height:50, width:50}}
                  
                >
                    <ArrowForwardIcon size="5" mt="0.5" color="white" />
                </View>
              </Pressable>
               
            </View>
          
        </View>
    )
}

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(50)).current  // Initial value for opacity: 0
    const fadeOpacity = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 1000,
     
        }
      ).start();
      Animated.timing(
        fadeOpacity,
        {
          toValue: 1,
          duration: 1000,
     
        }
      ).start();
    }, [fadeAnim,fadeOpacity])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          paddingTop: fadeAnim, 
          opacity: fadeOpacity        // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

  const SlideLoop = (props) => {
    const animated = new Animated.Value(props.startPoint);
    useEffect(() => {

        Animated.loop(
            Animated.timing(
                animated,
                {
                    toValue: -400,
                    duration: props.duration,
                    useNativeDriver: true,
                }
            )
        ).start();
    }, [animated])
    return (
        <Animated.View style={{...props.style, transform: [{translateX: animated}]}}>
            {props.children}
        </Animated.View>
    )
}



  const UpDown = (props) => {
    
    const animated = new Animated.Value(0);
  const duration = 1000;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 55,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  
      return (
        <Animated.View                 // Special animatable View
        style={[{transform: [{translateY: animated}]}]}
        >
            {props.children}
        </Animated.View>
      );
  }

export default Start