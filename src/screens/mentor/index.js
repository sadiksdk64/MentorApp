import { Text, View, Image } from 'native-base'
import React from 'react'
import MentorImage from './../../../assets/images/mentor2-full.png';
import Heart from './../../../assets/images/heart.png';
import FadeInDown from '../../components/FadeInDown';

const Mentor = () => {
    return (
        <View h="full" bg="white" >
            <View h="1/2">
                <Image source={MentorImage} height="full" />
            </View>
            <View borderRadiusTop="20" p="6" >
                <FadeInDown>
                    <View>
                        <Text fontSize="30" fontWeight="bold">Wilson Vetrovs</Text>
                        <Text fontSize="20" fontWeight="bold">Meditation</Text>
                        <Text fontSize="15">Meditation helps to more easily let go of fears, pain and resentment, stimulates brain activity.</Text>
                    </View>
                </FadeInDown>
                
                <FadeInDown>
                <View flexDirection="row" mt="4">
                    <View flex="1" bg="#f7f7f7"  pt="3" pb="3" rounded="xl" m="2" alignItems="center">
                        <Text fontWeight="bold">4.8</Text>
                    </View>
                    <View flex="1"  bg="#f7f7f7"  pt="3" pb="3" rounded="xl" m="2" alignItems="center">
                        <Text fontWeight="bold">$23/1hr</Text>
                    </View>
                    <View flex="1"  bg="#f7f7f7"  pt="3" pb="3" rounded="xl" m="2" alignItems="center">
                        <Text fontWeight="bold">8hr</Text>
                    </View>
                </View>
                </FadeInDown>
                <FadeInDown>
                    <View flexDirection="row" mt="4">
                        <View flex="2" bg="#fb985e"  pt="4" pb="4" rounded="xl" m="2" alignItems="center" alignContent="center">
                            <Text fontWeight="bold" color="white">Register a trial lesson</Text>
                        </View>
                        <View flex="1" bg="#f7f7f7"  pt="3" pb="3" rounded="xl" m="2" alignItems="center" alignContent="center">
                            <Image source={Heart}/>
                        </View>
                    </View>
                </FadeInDown>
                <FadeInDown>
                <View mt="4">
                    <Text fontSize="15" fontWeight="bold">Course details</Text>
                    <Text fontSize="15">The webinars begin with a meditation, after which there is a question and answer section.</Text>
                </View>
                </FadeInDown>
            </View>
        </View>
    )
}

export default Mentor