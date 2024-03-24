/**
	* @description      : 
	* @author           : mario
	* @group            : 
	* @created          : 06/03/2024 - 18:45:55
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 06/03/2024
	* - Author          : mario
	* - Modification    : 
**/
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={22} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, true),
			}}>

			<Tabs.Screen
				name="index"
				options={{
					title: 'Family Calendar',
					tabBarIcon: ({ color }) => <TabBarIcon name="list-ul" color={color} />,
					headerRight: () => (
						<Link href="/Profile" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="user-circle-o"
										size={28}
										color={Colors[colorScheme ?? 'light'].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>

			<Tabs.Screen
				name="Calendar"
				options={{
					title: 'Calendário',
					tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
				}}
			/>

			<Tabs.Screen
				name="Terms"
				options={{
					title: 'Termos e Políticas',
					tabBarIcon: ({ color }) => <TabBarIcon name="file-text-o" color={color} />,
				}}
			/>
		</Tabs>
	);
}
