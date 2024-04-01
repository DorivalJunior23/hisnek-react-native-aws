import { FlatList, StyleSheet, Text, View } from 'react-native';
import CartProductCard from '../components/ui/card/CartProductCard';
import { generateClient } from "aws-amplify/api";
import { listCartProducts } from "../graphql/queries";

const client = generateClient()


import products from '../../assets/data/cart';
import Button from '../components/ui/Button';
import { useEffect, } from 'react';


export default function CartScreen() {

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProductsResponse = await client.graphql({
          query: listCartProducts, // Using graphqlOperation for clarity
        });

        // Access and map the data from the response
        console.log(allProductsResponse)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  
  const totalPrice = products.reduce((summedPrice, product)=>
    summedPrice +product.item.price * product.quantity,
    0,
  )

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length} items): 
          <Text style={{color: '#e47911', fontWeight: 'bold'}}> ${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button 
        text='Proceed to checkout'
        onPress={()=> console.warn('go to checkout')}
        containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b782' }}
        />
      </View>
     <FlatList
     data={products}
     renderItem={({item}) => <CartProductCard cartItem={item}/>}
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