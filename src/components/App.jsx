import  { Component} from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts) ?? [];
    this.setState({
      contacts: parsedContacts,
    })
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) { 
      const strContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', strContacts);
    }
  }

  createContact = data => {
    const isUser = this.state.contacts.find(({name}) => name === data.name);
    if (isUser) {
      alert(`${data.name} is already associated with`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState({contacts:[...this.state.contacts, newContact]});
  };

  contactFilter = nameUser => this.setState({filter: nameUser});
  filterArray = () =>
  this.state.contacts.filter(({ name }) =>
    name
      .toLocaleLowerCase()
      .trim()
      .includes(this.state.filter.toLocaleLowerCase().trim())
  );


  deleteContact=userName =>{
    this.state.contacts.forEach((obj,i) =>{
      if(userName !== obj.name) {
        return;
      }
      this.state.contacts.splice(i, 1);
      this.setState({contacts: this.state.contacts});
    })
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact}/>
  
        <h2>Contacts</h2>
        <Filter contactFilter={this.contactFilter}/>
        <ContactList arr={this.filterArray} deleteContact={this.deleteContact}/>
      </div>
    )
  }
};

