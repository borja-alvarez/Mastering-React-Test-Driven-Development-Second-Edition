import React from "react";
export const CustomerForm = ({ original, onSubmit }) => {
  const [customer, setCustomer] = React.useState(original);

  const handleChange = (event) => {
    setCustomer((customer) => ({
      ...customer,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input readOnly type="text" id="firstName" name="firstName" value={customer.firstName} onChange={handleChange} />
      <label htmlFor="lastName">Last name</label>
      <input readOnly type="text" id="lastName" name="lastName" value={customer.lastName} onChange={handleChange} />
      <label htmlFor="phoneNumber">Phone number</label>
      <input readOnly type="text" id="phoneNumber" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange} />

      <input type="submit" value="Add" />
    </form>
  );
};
