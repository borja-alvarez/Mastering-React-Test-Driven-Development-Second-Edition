import React from "react";
export const CustomerForm = ({ original, onSubmit }) => {
  return (
    <form onSubmit={() => onSubmit(original)}>
      <label htmlFor="firstName">First name</label>
      <input readOnly type="text" id="firstName" name="firstName" value={original.firstName} />
      <input type="submit" value="Add" />
    </form>
  );
};
