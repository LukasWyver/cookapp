import { theme } from '@/theme';
import { ScrollView, StyleSheet } from 'react-native';
import { Ingredient } from './ingredient';

export function Ingredients() {
 return (
   <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    {Array.from({ length: 150}).map((_,idx) => <Ingredient key={idx} />)}
   </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 200,
    gap: 12
  },
})