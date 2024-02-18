import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FormField from './components/FormField';

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: ""
  })
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.contact.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      alert("contact not valid")
    }
    console.log(data);
  }
  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <FormField label={"name"} onChange={handleInputChange} value={data.name} type={"text"} className={"form-field"} />
        <FormField label={"contact"} onChange={handleInputChange} value={data.contact} type={"text"} />
        <FormField label={"email"} onChange={handleInputChange} value={data.email} type={"email"} />
        <Button type={"submit"} label={"submit"} />
      </form>
    </div>
  );
}

export default App;
