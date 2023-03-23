import React, { useState } from 'react';

export default function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleNameChange(event) {
    const enteredName = event.target.value;
    setName(enteredName);

    // Autofill email and phone based on the entered name
    if (enteredName === 'Shwetank') {
      setEmail('shwetank@gmail.com');
      setPhone('8979116704');
    } else if (enteredName === 'Jane Doe') {
      setEmail('janedoe@example.com');
      setPhone('555-5678');
    }
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
    </form>
  );
}
