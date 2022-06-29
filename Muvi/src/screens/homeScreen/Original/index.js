import {Text, ScrollView} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default function OriginalScreen () {
    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: scale(400), color: '#fff'}}>Original</Text>
        </ScrollView>
    );
}