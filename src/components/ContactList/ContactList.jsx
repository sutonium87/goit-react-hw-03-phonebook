// ContactList.js

// Import the React library to create a React component.
import React from 'react';

// Import the CSS module
import styles from './ContactList.module.css';

// Define a functional component called ContactList that takes two props:
// - contacts: an array of contact objects
// - handleDeleteContact: a function to handle contact deletion
const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        // Map through the 'contacts' array and create a list item (li) for each contact.
        // Use the 'contact.id' as the 'key' to uniquely identify each list item.
        <li key={contact.id} className={styles.contactItem}>
          {/* Display the contact's name and number */}
          {contact.name} - {contact.number}
          {/* Create a button to delete the contact when clicked.
               Use an arrow function to pass the 'contact.id' to the 'handleDeleteContact' function */}
          <button
            onClick={() => handleDeleteContact(contact.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// Export the ContactList component as the default export of this module.
export default ContactList;
