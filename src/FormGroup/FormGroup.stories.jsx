/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import FormGroup from 'src/FormGroup';
import { select } from '@storybook/addon-knobs';
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
export const WithDynamicProps = () => {
  const values = {
    Default: 'default',
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
  };

  const m = select('Margin (rem)', values, 'default');
  let mx = select('Margin Left & Right (rem)', values, 'default');
  let my = select('Margin Top & Bottom (rem)', values, 'default');
  let mt = select('Margin Top (rem)', values, 'default');
  let mr = select('Margin Right (rem)', values, 'default');
  let mb = select('Margin Bottom (rem)', values, 'default');
  let ml = select('Margin Left (rem)', values, 'default');

  let margin = {};

  if (m > 0) {
    margin = { m };
  } else if (mx > 0 || my > 0) {
    mx = mx === 'default' ? null : mx;
    my = my === 'default' ? null : my;

    margin = { mx, my };
  } else {
    mt = mt === 'default' ? null : mt;
    mr = mr === 'default' ? null : mr;
    mb = mb === 'default' ? null : mb;
    ml = ml === 'default' ? null : ml;

    margin = { m, mt, mr, mb, ml };
  }
  return (
    <>
      <FormGroup {...margin}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input id="firstName" type="text" defaultValue="First Name" />
      </FormGroup>
    </>
  );
};
