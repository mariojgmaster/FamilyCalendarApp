/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 06/03/2024 - 19:16:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/03/2024
    * - Author          : mario
    * - Modification    : 
**/
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TermsAndPolicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Termos e Políticas</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />
      <Text>Legal Area</Text>
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
    width: '75%',
  },
});
