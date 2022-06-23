import {Text, ScrollView} from 'react-native';

export default function FilmsScreen () {
    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 400, color: '#fff'}}>Films</Text>
        </ScrollView>
    );
}