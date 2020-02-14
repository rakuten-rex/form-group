```jsx
// inline layout
<FormGroup m={1}>
  <FormGroup row={true} mr={3}>
    <input type='text' value='Element1' readOnly={true} />
  </FormGroup>
  <FormGroup row={true} mr={3}>
    <input type='text' value='Element2' readOnly={true} />
  </FormGroup>
  <FormGroup row={true}>
    <input type='text' value='Element3' readOnly={true} />
  </FormGroup>
</FormGroup>

// block layout
<FormGroup mb={3}>
  <label htmlFor='firstName'>
    First Name:
  </label>
  <br />
  <input id='firstName' type='text' value='First Name' />
</FormGroup>
<FormGroup mb={3}>
  <label htmlFor='lastName'>
    Last Name:
  </label>
  <br />
  <input id='lastName' type='text' value='Last Name' />
</FormGroup>
<FormGroup>
  <FormGroup mb={3}>
    <label htmlFor='email'>
      Mail Address:
    </label>
    <br />
    <input id='email' type='text' value='Mail Address' />
  </FormGroup>
  <FormGroup mb={3}>
    <label htmlFor='password'>
      Password:
    </label>
    <br />
    <input id='password' type='text' value='Password' />
  </FormGroup>
</FormGroup>
```