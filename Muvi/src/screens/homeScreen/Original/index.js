import {Text, ScrollView} from 'react-native';

export default function OriginalScreen () {
    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 400, color: '#fff'}}>Original</Text>
        </ScrollView>
    );
}