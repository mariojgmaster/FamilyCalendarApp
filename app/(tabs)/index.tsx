/**
	* @description      : 
	* @author           : mario
	* @group            : 
	* @created          : 06/03/2024 - 18:33:44
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 06/03/2024
	* - Author          : mario
	* - Modification    : 
**/
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import Tasks from '@/components/Tasks';
import { useEffect, useState } from 'react';
import Task from '@/constants/types/Task';
import Note from '@/constants/types/Note';
import useFormatDate from '@/components/useFormatDate';
import getDiaDaSemana from '@/constants/WeekDay';

interface ITasks extends Task { }
interface INotes extends Note { }

export default function HomeScreen() {
	const [formatedDate, setFormatedDate] = useFormatDate({ dateParam: new Date(), formatParam: 'dd/MM/yyyy' })
	const [tasks, setTasks] = useState<Array<ITasks>>([]);
	const [notes, setNotes] = useState<Array<INotes>>([]);

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

		setNotes([
			{
				id: 0,
				title: 'Lembrar de tal coisa',
				description: 'Description of a thing.',
				createdAt: formatedDate,
				category: 'Tarefa'
			},
			{
				id: 1,
				title: 'Fazer tal coisa',
				description: 'Description of another thing.',
				createdAt: formatedDate,
				category: 'Evento'
			},
		]);
	}, [formatedDate, setFormatedDate]);

	return (
		<View style={styles.container}>
			<Tasks title='O que tem para Hoje' tasks={tasks} />
			<Tasks title='Notas' notes={notes} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topContent: {
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
});
