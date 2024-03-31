import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ui/card/ProductCard';

import products from '../../assets/data/products';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
    
     <FlatList
     data={products}
     renderItem={({item}) => <ProductCard item={item}/>}
     keyExtractor={({id})=> id}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    padding: 10,
  },

});
