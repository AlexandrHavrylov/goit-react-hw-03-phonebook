import React from "react";
import { ContactInfo } from "styles/Contacts.styled";
import { Contact } from "styles/Contacts.styled";
import { DeleteBtn } from "styles/Contacts.styled";
import { ImAddressBook } from "react-icons/im";
import { ContactsList } from "styles/Contacts.styled";

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactsList>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <ContactInfo>
              <ImAddressBook /> {name}: {number}
            </ContactInfo>
            <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </ContactsList>
    </div>
  );
};
