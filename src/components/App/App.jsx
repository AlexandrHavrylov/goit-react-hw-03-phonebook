import React, { Component } from "react";
import { Form } from "components/Form/Form";
import { Contacts } from "components/Contacts/Contacts";
import { v4 as uuidv4 } from "uuid";
import { Filter } from "components/Filter/Filter";
import { MainContainer } from "styles/App.styled";
import { Title } from "../../styles/App.styled";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rossie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
