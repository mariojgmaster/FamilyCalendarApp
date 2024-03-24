/**
	* @description      : 
	* @author           : mario
	* @group            : 
	* @created          : 13/03/2024 - 22:25:51
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 13/03/2024
	* - Author          : mario
	* - Modification    : 
**/
import { StatusBar } from 'expo-status-bar';
import { Alert, Dimensions, Modal, Platform, StyleSheet, TouchableHighlight } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function ModalScreen({ isModalVisible }: { isModalVisible: Boolean }) {
	const [modalVisible, setModalVisible] = useState(isModalVisible);

	return (
		isModalVisible && (
			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal foi fechado.');
				}}>
				<View style={{ marginTop: 22 }}>
					<View>
						<Text>Olá Mundo!</Text>

						<TouchableHighlight
							onPress={() => {
								setModalVisible(!modalVisible);
							}}>
							<Text>Esconder Modal</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>
		)
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
