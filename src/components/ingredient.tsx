import { theme } from '@/theme';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

export function Ingredient() {
 return (
   <Pressable style={styles.container}>
    <Image source={require("@/images/apple.png")} style={styles.image}/>
    <Text style={styles.title}>Maça</Text>
   </Pressable>
  );
}

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.colors.gray_200,
    borderRadius: theme.borderRadius.full,
    paddingHorizontal: 16,
    height: 42,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6
  },
  image: {

  },
  title: {

  }
})