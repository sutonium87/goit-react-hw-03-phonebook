import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  // Initialize the component's state
  state = {
    contacts: [], // Store the list of contacts
    filter: '', // Store the filter value
    name: '', // Store the name input value
    number: '', // Store the number input value
  };

  // Lifecycle method: componentDidMount
  // This method runs after the component is first rendered
  componentDidMount() {
    // Retrieve saved contacts from local storage when the app loads
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      // Parse and set the saved contacts to the component's state
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  // Lifecycle method: componentDidUpdate
  // This method runs whenever the component updates (e.g., state changes)
  componentDidUpdate(prevProps, prevState) {
    // Check if the contacts in the state have changed
    if (prevState.contacts !== this.state.contacts) {
      // Save the updated contacts to local storage
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // Event handler for the filter input
  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  // Event handler for input changes (name and number)
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Event handler for form submission (adding a new contact)
  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }
    const newContact = { id: this.generateId(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  // Generate a unique ID for a new contact
  generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Event handler for deleting a contact
  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // Render method: what gets displayed in the component
  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;

// This code defines a React component App that manages a list of contacts.
// Users can add, filter, and delete contacts, and the state is synchronized with localStorage to persist data across sessions.
