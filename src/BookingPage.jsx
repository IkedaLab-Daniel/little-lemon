import {Routes, Route, Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import React, { useState } from 'react';

function BookingPage(){
    // State for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [requests, setRequests] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({ name, email, phone, guests, date, time, requests });
      alert('Booking Confirmed!');
    };
  
    return (
      <div style={styles.container} id='booking-page'>
        <Navigation />
        <br/>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Personal Information */}
          <label style={styles.label}>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
  
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
  
          <label style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
  
          {/* Booking Details */}
          <label style={styles.label}>Number of Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={styles.input}
            min="1"
            max="20"
            required
          />
  
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
            required
          />
  
          <label style={styles.label}>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={styles.input}
            required
          />
  
          <label style={styles.label}>Special Requests:</label>
          <textarea
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            style={styles.textarea}
            rows="4"
            placeholder="Any special requests or preferences?"
          />
  
          <button type="submit" style={styles.button}>Confirm Booking</button>
        </form>
        <br/>
        <Footer />
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
    },
    header: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    label: {
      fontSize: '1rem',
      marginBottom: '8px',
      color: '#555',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '95%',
    },
    textarea: {
      padding: '10px',
      fontSize: '1rem',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '95%',
      resize: 'none',
    },
    button: {
      padding: '12px',
      fontSize: '1.1rem',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
}

export default BookingPage