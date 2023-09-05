// Import the React library to create a React component.
import React from 'react';

// Import the CSS module
import styles from './ContactForm.module.css';

// Define a functional component called ContactForm that takes four props:
// - name: the name input value
// - number: the number input value
// - handleChange: a function to handle input value changes
// - handleSubmit: a function to handle form submission
const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    // Create a form element with an onSubmit event handler that calls the handleSubmit function when the form is submitted.
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <label>
        Name:
        <input
          // Create an input element for the name with various attributes:
          // - type: text input
          // - name: name input field identifier
          // - pattern: regular expression to validate the input format
          // - title: tooltip text to describe the input format
          // - required: make the input required
          // - value: bind the value to the 'name' prop
          // - onChange: call the handleChange function when the i
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleChange}
        />
        <span>(e.g., John Doe)</span>
      </label>
      <label>
        Number:
        <input
          // Create an input element for the number with various attributes:
          // - type: telephone input
          // - name: number input field identifier
          // - pattern: regular expression to validate the input format for phone numbers
          // - title: tooltip text to describe the input format
          // - required: make the input required
          // - value: bind the value to the 'number' prop
          // - onChange: call the handleChange function when the input value changes
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <span>(e.g., +1 123-456-7890)</span>
      </label>
      {/* Create a submit button for the form */}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
