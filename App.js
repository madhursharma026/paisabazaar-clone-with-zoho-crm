import Login from './Login';
import Homepage from './Homepage';
import FirstPage from './FirstPage';
import { LogBox } from 'react-native';
import PersonalLoan from './PersonalLoan';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoanAmount from './Components/personalLoanPages/LoanAmount';
import BestOffers from './Components/personalLoanPages/BestOffers';
import SalariedPage from './Components/personalLoanPages/SalariedPage';
import ResidenceCity from './Components/personalLoanPages/ResidenceCity';
import ResidenceType from './Components/personalLoanPages/ResidenceType';
import BankSelectPage from './Components/personalLoanPages/BankSelectPage';
import BusinessLoan from './Components/SelfEmployedBusinessPages/BusinessLoan';
import EmploymentDetails from './Components/personalLoanPages/EmploymentDetails';
import CameraScreen from './Components/personalLoanPages/CameraScreen';

LogBox.ignoreAllLogs();

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalLoan" component={PersonalLoan} options={{ headerShown: false }} />
        <Stack.Screen name="SalariedPage" component={SalariedPage} options={{ headerShown: false }} />
        <Stack.Screen name="BankSelectPage" component={BankSelectPage} options={{ headerShown: false }} />
        <Stack.Screen name="EmploymentDetails" component={EmploymentDetails} options={{ headerShown: false }} />
        <Stack.Screen name="ResidenceCity" component={ResidenceCity} options={{ headerShown: false }} />
        <Stack.Screen name="ResidenceType" component={ResidenceType} options={{ headerShown: false }} />
        <Stack.Screen name="LoanAmount" component={LoanAmount} options={{ headerShown: false }} />
        <Stack.Screen name="BestOffers" component={BestOffers} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessLoan" component={BusinessLoan} options={{ headerShown: false }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
