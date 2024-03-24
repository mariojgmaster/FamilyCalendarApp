/**
	* @description      : 
	* @author           : mario
	* @group            : 
	* @created          : 06/03/2024 - 19:18:49
	* @notes            : https://www.npmjs.com/package/react-native-calendars/v/1.1286.0
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 06/03/2024
	* - Author          : mario
	* - Modification    : 
**/

import React, { useState } from 'react';
import { Calendar, Agenda, LocaleConfig, DateData } from 'react-native-calendars';
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { Text, View } from '@/components/Themed';
import useFormatDate from '@/components/useFormatDate';
import { DayState } from 'react-native-calendars/src/types';
import ModalScreen from '../modal';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function CalendarScreen() {
	const [today,] = useFormatDate({ dateParam: new Date(), formatParam: 'yyyy-MM-dd' });
	const [modalVisible, setModalVisible] = useState(false);

	const onDayPress = ({ date, state }: { date: (DateData & string) | undefined, state: DayState | undefined }) => {
		if (state != 'disabled') {
			alert(state + ' - ' + JSON.stringify(date, null, 2));

			setModalVisible(true);
		};
	}

	const onLongDayPress = ({ date, state }: { date: (DateData & string) | undefined, state: DayState | undefined }) => {
		if (state != 'disabled') {
			alert(state + ' - ' + JSON.stringify(date, null, 2));

			setModalVisible(true);
		}
	}

	return (
		<View style={styles.container}>
			{/* <Calendar style={styles.calendar} /> */}

			<ModalScreen isModalVisible={modalVisible} />

			<Calendar
				style={{
					height: screenHeight,
				}}
				initialDate={today}
				minDate={today}
				dayComponent={({ date, state }) => {
					return (
						<TouchableWithoutFeedback
							onPress={() => onDayPress({ date, state })}
							onLongPress={() => onLongDayPress({ date, state })}
						>
							<View style={{ width: '90%', height: 90, paddingHorizontal: 8, paddingVertical: 12, borderRadius: 10, backgroundColor: (state === 'disabled') ? '#CCCCCCCC' : ((state != 'today') ? '#333' : '#AF9552DD'), alignItems: 'center', justifyContent: 'center', }}>
								<Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: (state === 'disabled') ? '#55555599' : ((state != 'today') ? '#DDD' : '#111') }}>{date ? date.day : 'X'}</Text>
							</View>
						</TouchableWithoutFeedback>
					);
				}}
				enableSwipeMonths={true}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	calendar: {
		// width: screenWidth
	},
});
