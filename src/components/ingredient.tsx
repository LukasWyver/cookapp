import { theme } from '@/theme';
import { Image, Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean
}

export function Ingredient({ name, image, selected = false, ...rest}: IngredientsProps & PressableProps) {
 return (
   <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
    <Image source={require("@/images/apple.png")} style={styles.image}/>
    <Text style={styles.title}>{name}</Text>
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
    width: 16,
    height: 16
  },
  title: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.medium
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.green_600,
    backgroundColor: theme.colors.green_100
  }
})