import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme'

export default function app() {
 return (
   <View style={styles.container}>
       <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
   </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    fontFamily: theme.fonts.family.bold,
    lineHeight: 44,
    marginTop: 42,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
    marginTop: 12,
    marginBottom: 38,
    width: 292
  },
  ingredient: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 200,
    gap: 12,
  },
})