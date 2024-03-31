import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface ProductCardProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
    }
}

export default function ProductCard({ item }: ProductCardProps) {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ProductDetails', {id: item.id});
      };
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image
                style={styles.image}
                source={{ uri: item.image }}
            />
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.title}>{item.title}</Text>

                <View style={styles.ratingsContainer}>

                    {[0, 0, 0, 0, 0].map((el, i) => (
                        <MaterialIcons
                            key={`${item.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-outline'}
                            size={18}
                            color={"#e47911"}
                        />
                    ))}
                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>
                    from ${item.price}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 5,
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        
    },
    rightContainer: {
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: '#c2c2c2',
        padding: 10,
        flex: 3,
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    }
});