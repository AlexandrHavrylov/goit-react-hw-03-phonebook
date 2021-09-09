import { Input, Label } from "styles/Form.styled";
import React from "react";
import { Section } from "styles/App.styled";

export const Filter = ({ value, onFilterChange }) => (
  <Section>
    <Label>
      Find contatcs by Name
      <Input type="text" value={value} onChange={onFilterChange} />
    </Label>
  </Section>
);
