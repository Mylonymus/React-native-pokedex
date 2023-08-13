import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Navigation />
			</AuthProvider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
