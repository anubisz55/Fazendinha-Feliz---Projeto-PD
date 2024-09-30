import React, { useState } from 'react';  // Importação correta
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home/Home';
import Casinhas from './src/Casinhas/Casinhas';
import Piscinas from './src/Piscinas/Piscinas';
import EstruturaPiscinas from './src/EstruturaPiscinas/EstruturaPiscinas';
import Cozinha from './src/Cozinha/Cozinha';
import Fazendinha from './src/Fazendinha/Fazendinha';
import Aquario from './src/Aquario/Aquario';
import Jardim from './src/Jardim/Jardim';
import Reserva from './src/Reserva/Reserva';
import Especies from './src/Especies/Especies';
import EspeciesPlantas from './src/EspeciesPlantas/EspeciesPlantas';
import EspeciesFazendinha from './src/EspeciesFazendinha/EspeciesFazendinha';
import EstruturaCasinhas from './src/EstruturaCasinhas/EstruturaCasinhas';
import CozinhaCardapio from './src/CozinhaCardapio/CozinhaCardapio';

const Stack = createStackNavigator();

export default function App() {
  const [reservaAtiva, setReservaAtiva] = useState(false);

  const handleFazerReserva = () => {
    setReservaAtiva(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <Home {...props} reservaAtiva={reservaAtiva} onFazerReserva={handleFazerReserva} />}
        </Stack.Screen>
        <Stack.Screen name="Casinhas" component={Casinhas} />
        <Stack.Screen name="EstruturaCasinhas" component={EstruturaCasinhas} />
        <Stack.Screen name="Piscinas" component={Piscinas} />
        <Stack.Screen name="EstruturaPiscinas" component={EstruturaPiscinas} />
        <Stack.Screen name="Cozinha" component={Cozinha} />
        <Stack.Screen name="CozinhaCardapio" component={CozinhaCardapio} />
        <Stack.Screen name="Fazendinha" component={Fazendinha} />
        <Stack.Screen name="EspeciesFazendinha" component={EspeciesFazendinha} />
        <Stack.Screen name="Aquario" component={Aquario} />
        <Stack.Screen name="Especies" component={Especies} />
        <Stack.Screen name="Jardim" component={Jardim} />
        <Stack.Screen name="EspeciesPlantas" component={EspeciesPlantas} />
        <Stack.Screen name="Reserva">
          {props => <Reserva {...props} reservaAtiva={reservaAtiva} onFazerReserva={handleFazerReserva} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



