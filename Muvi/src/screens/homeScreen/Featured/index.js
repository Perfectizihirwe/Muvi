import {Text, ScrollView} from 'react-native';

export default function FeaturedScreen () {
    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 400, color: '#fff'}}>Featured</Text>
        </ScrollView>
    );
}