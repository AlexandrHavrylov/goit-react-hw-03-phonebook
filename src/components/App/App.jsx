import React, { Component } from "react";
import { Form } from "components/Form/Form";
import { Contacts } from "components/Contacts/Contacts";
import { v4 as uuidv4 } from "uuid";
import { Filter } from "components/Filter/Filter";
import { MainContainer } from "styles/App.styled";
import { Title } from "../../styles/App.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (contactData) => {
    const { contacts } = this.state;
    const contact = { id: uuidv4(), ...contactData };

    contacts.find((contact) => contact.name === contactData.name)
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  handlerOnFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  handlerOnDelteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilterValue = filter.toLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (contacts) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const filterContacts = this.getFilterContacts();

    return (
      <MainContainer>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <Filter value={filter} onFilterChange={this.handlerOnFilterChange} />

        <Contacts
          contacts={filterContacts}
          onDeleteContact={this.handlerOnDelteContact}
        />
      </MainContainer>
    );
  }
}
