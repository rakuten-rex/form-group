/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import FormGroup from 'src/FormGroup';
import TextFieldLabelHelper from '@rakuten-rex/text-field/TextFieldLabelHelper';
import { select, boolean } from '@storybook/addon-knobs';
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
      <TextFieldLabelHelper
        id="name01"
        name="name"
        htmlFor="name"
        label="Name"
        labelId="labelId"
      />
    </FormGroup>
  );
};

export const InlineLayout = () => {
  return (
    <>
      <FormGroup row mr={6}>
        <TextFieldLabelHelper
          id="dog"
          name="element1"
          htmlFor="element1"
          label="Label1"
        />
      </FormGroup>
      <FormGroup row mr={6}>
        <TextFieldLabelHelper
          id="cat"
          name="element2"
          htmlFor="element2"
          label="Label2"
        />
      </FormGroup>
      <FormGroup row>
        <TextFieldLabelHelper
          id="horse"
          name="element3"
          htmlFor="element3"
          label="Label3"
        />
      </FormGroup>
    </>
  );
};
export const BlockLayout = () => {
  return (
    <>
      <FormGroup mb={6}>
        <TextFieldLabelHelper
          name="firstName1"
          htmlFor="firstName1"
          label="First Name"
        />
      </FormGroup>
      <FormGroup mb={6}>
        <TextFieldLabelHelper
          name="lastName1"
          htmlFor="lastName1"
          label="Last Name"
        />
      </FormGroup>
      <FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper
            name="email"
            htmlFor="email"
            label="Email"
          />
        </FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper
            name="password"
            htmlFor="password"
            label="Password"
          />
        </FormGroup>
      </FormGroup>
    </>
  );
};

export const MixedLayout = () => {
  return (
    <>
      <FormGroup mb={6}>
        <FormGroup row mr={6} mb={6}>
          <TextFieldLabelHelper
            name="firstName"
            htmlFor="firstName"
            label="First Name"
          />
        </FormGroup>
        <FormGroup row mb={6}>
          <TextFieldLabelHelper
            name="lastName"
            htmlFor="lastName"
            label="Last Name"
          />
        </FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper
            name="email"
            htmlFor="email"
            label="Email"
          />
        </FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper
            name="address"
            htmlFor="address"
            label="Address"
          />
        </FormGroup>
      </FormGroup>
    </>
  );
};
export const WithDynamicProps = () => {
  const values = {
    default: 'default',
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

  const row = boolean('Layout (Block/Inline)', false);
  let m = select('Margin (rem)', values, '');
  let mx = select('Margin Left & Right (rem)', values, '');
  let my = select('Margin Top & Bottom (rem)', values, '');
  let mt = select('Margin Top (rem)', values, '');
  let mr = select('Margin Right (rem)', values, '');
  let mb = select('Margin Bottom (rem)', values, '');
  let ml = select('Margin Left (rem)', values, '');

  let margin = {};

  if (m > 0) {
    m = m === 'default'||'' ? null : m;
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
      <FormGroup {...margin} row={row}>
        <TextFieldLabelHelper
          name="firstName"
          htmlFor="firstName"
          label="First Name"
        />
      </FormGroup>
      <FormGroup {...margin} row={row}>
        <TextFieldLabelHelper
          name="lastName"
          htmlFor="lastName"
          label="Last Name"
        />
      </FormGroup>
    </>
  );
};
