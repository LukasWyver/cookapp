import { StyleSheet, Text, View } from "react-native"
import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated"
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from "@/theme"

type SelectedProps = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps){
  return (
    <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}/>
      </View>
    </Animated.View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.lg,
    position: "absolute",
    bottom: 24,
    width: "100%",
    alignSelf: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34,    
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular
  }
})