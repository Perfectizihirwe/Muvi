import {Text, ScrollView} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default function FilmsScreen () {
    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: scale(400), color: '#fff'}}>Films</Text>
        </ScrollView>
    );
}