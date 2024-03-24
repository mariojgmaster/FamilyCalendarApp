/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 06/03/2024 - 19:38:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/03/2024
    * - Author          : mario
    * - Modification    : 
**/
import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import Task from '@/constants/types/Task';
import Note from '@/constants/types/Note';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import TextTruncateProps from '@/constants/types/TextTruncate';
import AntDesign from '@expo/vector-icons/AntDesign';
import generateRandomNumber from './generateRandomNumber';

interface Tasks {
    title: string,
    tasks?: Array<Task>
    notes?: Array<Note>
}

function TaskIcon(props: {
    name: React.ComponentProps<typeof AntDesign>['name'];
    color: string;
}) {
    return <AntDesign size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function Tasks({ title, tasks, notes }: Tasks) {
    const colorScheme = useColorScheme();
    const textTruncate: TextTruncateProps = {
        numberOfLinesTitle: 1,
        numberOfLinesText: 2,
        ellipsizeMode: 'tail'
    };

    // const getRandomcolor = () => {
    //     return generateRandomNumber(0, (Colors.cardsPastelColors.length - 1));
    // };

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].title }]}>{title}</Text>
            </View>

            {
                tasks && (
                    <FlatList
                        style={styles.tasksContent}
                        data={tasks}
                        renderItem={({ item: task, index }) => (
                            <View style={{ marginBottom: 15, backgroundColor: '#f3f0c622', borderRadius: 10, flexDirection: 'row' }}>
                                <View style={{ flex: 11, paddingVertical: 8, paddingHorizontal: 14, backgroundColor: 'transparent', flexDirection: 'column', borderRadius: 20 }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: 'transparent' }}>
                                        <TaskIcon
                                            name='clockcircleo'
                                            color='rgba(255, 255, 255, .5)'
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

                            // <View style={styles.taskContent}>
                            //     <Text numberOfLines={textTruncate.numberOfLinesTitle} ellipsizeMode={textTruncate.ellipsizeMode} style={styles.taskTitle}>{task.title}</Text>

                            //     <Text numberOfLines={textTruncate.numberOfLinesText} ellipsizeMode={textTruncate.ellipsizeMode} style={styles.taskDescription}>{task.description}</Text>

                            //     <View style={styles.taskTagContainer}>
                            //         <Text style={styles.taskDate}>{task.createdAt}</Text>

                            //         <View style={styles.taskTag}>
                            //             <Text style={styles.taskSmallText}>{task.type}</Text>
                            //         </View>
                            //     </View>
                            // </View>
                        )}
                    />
                )
            }

            {
                notes && (
                    <FlatList
                        style={styles.notesContent}
                        data={notes}
                        renderItem={({ item: task }) => (
                            <View style={styles.taskContent}>
                                <Text numberOfLines={textTruncate.numberOfLinesTitle} ellipsizeMode={textTruncate.ellipsizeMode} style={styles.taskTitle}>{task.title}</Text>

                                <Text numberOfLines={textTruncate.numberOfLinesText} ellipsizeMode={textTruncate.ellipsizeMode} style={styles.taskDescription}>{task.description}</Text>

                                <View style={styles.taskTagContainer}>
                                    <Text style={styles.taskDate}>{task.createdAt}</Text>

                                    <View style={styles.taskTag}>
                                        <Text style={styles.taskSmallText}>{task.category}</Text>
                                    </View>
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