import { theme } from '@/theme';
import { useState } from 'react';
import { Ingredient } from './ingredient';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { Selected } from './selected';

export function Ingredients() {
  const [ selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string){
    if(selected.includes(value)){
      return setSelected((state) => state.filter((item) => item !== value))
    }

    return setSelected((state) => [...state, value])
  }

  function handleClearSelected(){
    Alert.alert("Limpar","Deseja limpar tudo?",[
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([])}
    ])
    
  }

 return (
    <>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {Array.from({ length: 150}).map((_,idx) => (
          <Ingredient 
            key={idx} 
            name={'maça'} 
            image=""
            selected={selected.includes(String(idx))}
            onPress={() => handleToggleSelected(String(idx))}
          />
        ))}
      </ScrollView>
        
      {selected.length > 0 && 
        <Selected 
          onSearch={() => {}}
          quantity={selected.length} 
          onClear={handleClearSelected} 
        />
      }
    </>
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