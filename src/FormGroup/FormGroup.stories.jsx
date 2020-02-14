/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { text } from '@storybook/addon-knobs';
import FormGroup from 'src/FormGroup';
import { withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Form Group',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => {
  return (
    <FormGroup>
      <input type="text" defaultValue="Element1" readOnly />
    </FormGroup>
  );
};

export const InlineLayout = () => {
  return (
    <>
      <FormGroup m={1}>
        <FormGroup row mr={3}>
          <input type="text" defaultValue="Element1" readOnly />
        </FormGroup>
        <FormGroup row mr={3}>
          <input type="text" defaultValue="Element2" readOnly />
        </FormGroup>
        <FormGroup row>
          <input type="text" defaultValue="Element3" readOnly />
        </FormGroup>
      </FormGroup>
    </>
  );
};
export const BlockLayout = () => {
  return (
    <>
      <FormGroup mb={3}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input id="firstName" type="text" defaultValue="First Name" />
      </FormGroup>
      <FormGroup mb={3}>
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input id="lastName" type="text" defaultValue="Last Name" />
      </FormGroup>
      <FormGroup>
        <FormGroup mb={3}>
          <label htmlFor="email">Mail Address:</label>
          <br />
          <input id="email" type="text" defaultValue="Mail Address" />
        </FormGroup>
        <FormGroup mb={3}>
          <label htmlFor="password">Password:</label>
          <br />
          <input id="password" type="text" defaultValue="Password" />
        </FormGroup>
      </FormGroup>
    </>
  );
};

export const MixedLayout = () => {
  return (
    <>
      <FormGroup mb={3}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input id="firstName" type="text" defaultValue="First Name" />
      </FormGroup>
      <FormGroup mb={3}>
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input id="lastName" type="text" defaultValue="Last Name" />
      </FormGroup>
      <FormGroup>
        <FormGroup mb={3}>
          <label htmlFor="email">Mail Address:</label>
          <br />
          <input id="email" type="text" defaultValue="Mail Address" />
        </FormGroup>
        <FormGroup mb={3}>
          <label htmlFor="password">Password:</label>
          <br />
          <input id="password" type="text" defaultValue="Password" />
        </FormGroup>
      </FormGroup>
      <FormGroup mb={3}>
        <FormGroup row mr={3}>
          <label htmlFor="month">Month:</label>
          <br />
          <input id="month" type="text" defaultValue="month" readOnly />
        </FormGroup>
        <FormGroup row>
          <label htmlFor="year">Year:</label>
          <br />
          <input id="year" type="text" defaultValue="year" readOnly />
        </FormGroup>
      </FormGroup>
    </>
  );
};
