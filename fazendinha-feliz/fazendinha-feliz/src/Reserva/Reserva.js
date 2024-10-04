import React, { useState } from 'react';  
import { View, Text, ScrollView, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';  // biblioteca de ícones
import styles from './styles'; 

export default function Reserva() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [message, setMessage] = useState('');

  const handleDayPress = (day) => {
    let newSelectedDays = [...selectedDays];

    // Verifica se o dia já foi selecionado
    if (newSelectedDays.includes(day.dateString)) {
      // Remove o dia, se já estiver selecionado
      newSelectedDays = newSelectedDays.filter(selectedDay => selectedDay !== day.dateString);
    } else {
      // Adiciona o dia se ainda não estiver selecionado
      newSelectedDays.push(day.dateString);
    }

    setSelectedDays(newSelectedDays);

    // Exibe a mensagem com base no número de dias selecionados
    if (newSelectedDays.length === 4) {
      setMessage('Pacote de 4 dias selecionados');
    } else if (newSelectedDays.length === 7) {
      setMessage('Pacote de 7 dias selecionados');
    } else {
      setMessage('');
    }
  };

  const markedDates = selectedDays.reduce((acc, day) => {
    acc[day] = { selected: true, marked: true, dotColor: '#4caf50' };
    return acc;
  }, {});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Reservas</Text>
      
      <Text style={styles.infoText}>
        Temos pacotes de reservas de 4 dias ou de uma semana. Selecione os 4 ou 7 dias corretamente para validar sua reserva no nosso calendário!
      </Text>

      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleDayPress}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#f5f5f5',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#4caf50',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#4caf50',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#4caf50',
            arrowColor: '#4caf50',
            monthTextColor: '#4caf50',
            indicatorColor: '#4caf50',
          }}
        />
      </View>

      {message ? <Text style={styles.infoText}>{message}</Text> : null}

      <View style={styles.contactContainer}>
        <Text style={styles.infoText}>Formas de pagamento:</Text>
        <View style={styles.paymentMethods}>
          <Text style={styles.contactText}>
            <Icon name="credit-card" size={20} color="#4caf50" /> Cartão de Crédito
          </Text>
          <Text style={styles.contactText}>
            <Icon name="credit-card" size={20} color="#4caf50" /> Cartão de Débito
          </Text>
          <Text style={styles.contactText}>
            <Icon name="money" size={20} color="#4caf50" /> Dinheiro
          </Text>
          <Text style={styles.contactText}>
            <Icon name="file-text" size={20} color="#4caf50" /> Boleto
          </Text>
          <Text style={styles.contactText}>
            <Icon name="bitcoin" size={20} color="#4caf50" /> PIX
          </Text>
        </View>

        <Text style={styles.infoText}>Informações de contato:</Text>
        <View style={styles.contactMethods}>
          <Text style={styles.contactText}>
            <Icon name="envelope" size={20} color="#4caf50" /> Email: contato@fazendinhafeliz.com
          </Text>
          <Text style={styles.contactText}>
            <Icon name="whatsapp" size={20} color="#4caf50" /> Telefone: (xx) xxxx-xxxx
          </Text>
          <Text style={styles.contactText}>
            <Icon name="instagram" size={20} color="#4caf50" /> Instagram: @fazendinhafeliz
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Confirmar Reserva" onPress={() => alert('Reserva confirmada!')} color="#388e3c" />
      </View>
    </ScrollView>
  );
}
