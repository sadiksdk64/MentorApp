import React,{useEffect} from 'react'
import { Animated} from 'react-native';

const FadeInDown = (props) => {
    const animated = new Animated.Value(50);
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
        style={[{transform: [{translateY: animated}]}]}
        >
            {props.children}
        </Animated.View>
      )

}

export default FadeInDown