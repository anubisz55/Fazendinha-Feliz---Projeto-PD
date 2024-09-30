import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactContainer: {
    marginVertical: 20,
  },
  paymentMethods: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  contactMethods: {
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default styles;





