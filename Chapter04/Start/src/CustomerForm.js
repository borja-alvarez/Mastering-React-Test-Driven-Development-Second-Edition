import React from "react";
export const CustomerForm = ({ original, onSubmit }) => {
  const [customer, setCustomer] = React.useState(original);

  const handleChangeFirstName = (event) => {
    setCustomer((customer) => ({ ...customer, firstName: event.target.value }));
  };
  const handleChangeLastName = (event) => {
    setCustomer((customer) => ({ ...customer, lastName: event.target.value }));
  };
  const handleChangePhoneNumber = (event) => {
    setCustomer((customer) => ({ ...customer, phoneNumber: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input readOnly type="text" id="firstName" name="firstName" value={customer.firstName} onChange={handleChangeFirstName} />
      <label htmlFor="lastName">Last name</label>
      <input readOnly type="text" id="lastName" name="lastName" value={customer.lastName} onChange={handleChangeLastName} />
      <label htmlFor="phoneNumber">Phone number</label>
      <input readOnly type="text" id="phoneNumber" name="phoneNumber" value={customer.phoneNumber} onChange={handleChangePhoneNumber} />

      <input type="submit" value="Add" />
    </form>
  );
};
