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

import React, { useEffect, useState } from 'react';
import { Calendar, Agenda, LocaleConfig, DateData } from 'react-native-calendars';
import { Dimensions, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { Text, View } from '@/components/Themed';
import useFormatDate from '@/components/useFormatDate';
import { DayState } from 'react-native-calendars/src/types';

import TextTruncateProps from '@/constants/types/TextTruncate';
import Task from '@/constants/types/Task';

import Fontisto from '@expo/vector-icons/Fontisto';

import ModalScreen from '../modal';
import Colors from '@/constants/Colors';
import getDiaDaSemana from '@/constants/WeekDay';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface ITasks extends Task { }

export default function CalendarScreen() {
	const [today,] = useFormatDate({ dateParam: new Date(), formatParam: 'yyyy-MM-dd' });
	const [modalVisible, setModalVisible] = useState(false);

	function TaskIcon(props: {
		name: React.ComponentProps<typeof Fontisto>['name'];
		color: string;
		size: number;
	}) {
		return <Fontisto style={{ marginBottom: -3 }} {...props} />;
	}

	const textTruncate: TextTruncateProps = {
		numberOfLinesTitle: 1,
		numberOfLinesText: 2,
		ellipsizeMode: 'tail'
	};

	// const onDayPress = ({ date, state }: { date: (DateData & string) | undefined, state: DayState | undefined }) => {
	// 	if (state != 'disabled') {
	// 		alert(state + ' - ' + JSON.stringify(date, null, 2));

	// 		setModalVisible(true);
	// 	};
	// }

	// const onLongDayPress = ({ date, state }: { date: (DateData & string) | undefined, state: DayState | undefined }) => {
	// 	if (state != 'disabled') {
	// 		alert(state + ' - ' + JSON.stringify(date, null, 2));

	// 		setModalVisible(true);
	// 	}
	// }

	const [tasks, setTasks] = useState<Array<ITasks>>([]);
	const [formatedDate, setFormatedDate] = useFormatDate({ dateParam: new Date(), formatParam: 'dd/MM/yyyy' });

	useEffect(() => {
		setTasks([
			{
				id: 0,
				title: 'Pôr o lixo para fora 1 palavra 2 mario 3 olá',
				description: 'Description of a thing.',
				createdAt: formatedDate,
				type: 'Tarefa',
				status: 'A Fazer',
				weekDay: getDiaDaSemana(new Date('2024-03-25 00:00:00')),
			},
			{
				id: 1,
				title: 'Ir à casa do pápa',
				description: 'Description of another thing.',
				createdAt: formatedDate,
				type: 'Evento',
				status: 'Em Andamento',
				weekDay: getDiaDaSemana(new Date()),
			},
			{
				id: 2,
				title: 'Receber amigos em casa',
				description: 'Description of another thing 2.',
				createdAt: formatedDate,
				type: 'Evento',
				status: 'Bloqueada',
				weekDay: getDiaDaSemana(new Date()),
			},
			{
				id: 3,
				title: 'Pôr o lixo para fora 1 palavra 2 mario 3 olá',
				description: 'Description of a thing.',
				createdAt: formatedDate,
				type: 'Tarefa',
				status: 'Concluída',
				weekDay: getDiaDaSemana(new Date()),
			},
			{
				id: 4,
				title: 'Ir à casa do pápa',
				description: 'Description of another thing.',
				createdAt: formatedDate,
				type: 'Evento',
				status: 'Em Espera',
				weekDay: getDiaDaSemana(new Date()),
			},
			{
				id: 5,
				title: 'Receber amigos em casa',
				description: 'Description of another thing 2.',
				createdAt: formatedDate,
				type: 'Evento',
				status: 'Revisão',
				weekDay: getDiaDaSemana(new Date()),
			},
		]);
	}, [formatedDate, setFormatedDate]);

	return (
		<View style={styles.container}>
			{/* <Calendar style={styles.calendar} /> */}

			{/* <ModalScreen isModalVisible={modalVisible} /> */}

			<Calendar
				minDate={today}
				onDayPress={day => {
					console.log('selected day', day);
				}}
				markingType={'period'}
				markedDates={{
					// [`${today}`]: { selected: true, marked: false, dotColor: 'black', selectedColor: '#FF8844' },
					// '2024-03-17': { marked: true },
					// '2024-03-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
					// '2024-03-19': { disabled: true, disableTouchEvent: true }

					[`${today}`]: { textColor: '#FF8844' },
					'2024-03-24': { startingDay: true, color: '#FF8844', textColor: 'white' },
					'2024-03-25': { selected: true, endingDay: true, color: '#FF8844', textColor: 'white', marked: true, dotColor: 'black' },
				}}
				// Handler which gets executed on day long press. Default = undefined
				onDayLongPress={day => {
					console.log('selected day', day);
				}}
				enableSwipeMonths={true}
			/>

			{
				tasks && (
					<FlatList
						style={styles.tasksContent}
						data={tasks}
						renderItem={({ item: task, index }) => (
							<View style={{ marginBottom: 15, backgroundColor: '#f3f0c622', borderRadius: 10, flexDirection: 'row' }}>
								<View style={{ flex: 11, paddingVertical: 8, paddingHorizontal: 14, backgroundColor: 'transparent', flexDirection: 'column', borderRadius: 20 }}>
									<View style={{ alignItems: 'baseline', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: 'transparent', marginBottom: 5 }}>
										<TaskIcon
											name='date'
											color='rgba(255, 255, 255, .5)'
											size={20}
										/>
										<Text style={[styles.taskDate, { marginLeft: 10 }]}>{task.createdAt}</Text>
									</View>
									<Text numberOfLines={textTruncate.numberOfLinesTitle} ellipsizeMode={textTruncate.ellipsizeMode} style={styles.taskTitle}>{task.title}</Text>
									<Text numberOfLines={textTruncate.numberOfLinesText} ellipsizeMode={textTruncate.ellipsizeMode} style={styles.taskDescription}>{task.description}</Text>

									<View style={styles.taskTagContainer}>
										<View style={styles.taskTag}>
											<Text style={styles.taskSmallText}>{task.type}</Text>
										</View>
									</View>
								</View>

								<View style={{ flex: 3, backgroundColor: Colors.cardsPastelColors[task.status], alignItems: 'center', justifyContent: 'center', paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'column', borderRadius: 20 }}>
									<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{task.weekDay}</Text>
									<Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>{task.status}</Text>
								</View>
							</View>
						)}
					/>
				)
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
	},

	topContent: {
		padding: 15,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	tasksContent: {
		padding: 15,
	},
	notesContent: {
		padding: 15,
		marginBottom: 15,
	},
	taskContent: {
		paddingVertical: 8,
		paddingHorizontal: 14,
		marginBottom: 15,
		backgroundColor: '#f3f0c622',
		borderRadius: 10,
	},
	taskTitle: {
		fontSize: 18,
		marginBottom: 5,
	},
	taskDescription: {
		fontSize: 14,
		marginTop: 10,
	},
	taskDate: {
		fontSize: 16,
		opacity: .5,
	},
	taskTagContainer: {
		marginTop: 14,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: 'transparent',
	},
	taskTag: {
		margin: 2,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: '#f3f0c622',
	},
	taskSmallText: {
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
