import { StyleSheet, Text, View  } from 'react-native';
import Button from '../components/ui/Button';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

import { getCurrentUser } from 'aws-amplify/auth';

async function currentAuthenticatedUser() {
  try {
    const { username } = await getCurrentUser();
    console.log(`The username: ${username}`);
  } catch (err) {
    console.log(err);
  }
}

export default function ProfileScreen() {
  const { signOut } = useAuthenticator();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Button text="Sign Out" onPress={signOut} />;
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
