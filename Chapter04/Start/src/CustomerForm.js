import React from "react";
export const CustomerForm = ({ original, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(original);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input readOnly type="text" id="firstName" name="firstName" value={original.firstName} />
      <input type="submit" value="Add" />
    </form>
  );
};
