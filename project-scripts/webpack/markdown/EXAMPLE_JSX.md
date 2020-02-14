```jsx
// inline layout
<FormGroup m={1}>
  <FormGroup row={true} mr={3}>
    <input type='text' defaultValue='Element1' readOnly={true} />
  </FormGroup>
  <FormGroup row={true} mr={3}>
    <input type='text' defaultValue='Element2' readOnly={true} />
  </FormGroup>
  <FormGroup row={true}>
    <input type='text' defaultValue='Element3' readOnly={true} />
  </FormGroup>
</FormGroup>

// block layout
<FormGroup mb={3}>
  <label htmlFor='firstName'>
    First Name:
  </label>
  <br />
  <input id='firstName' type='text' defaultValue='First Name' />
</FormGroup>
<FormGroup mb={3}>
  <label htmlFor='lastName'>
    Last Name:
  </label>
  <br />
  <input id='lastName' type='text' defaultValue='Last Name' />
</FormGroup>
<FormGroup>
  <FormGroup mb={3}>
    <label htmlFor='email'>
      Mail Address:
    </label>
    <br />
    <input id='email' type='text' defaultValue='Mail Address' />
  </FormGroup>
  <FormGroup mb={3}>
    <label htmlFor='password'>
      Password:
    </label>
    <br />
    <input id='password' type='text' defaultValue='Password' />
  </FormGroup>
</FormGroup>
```