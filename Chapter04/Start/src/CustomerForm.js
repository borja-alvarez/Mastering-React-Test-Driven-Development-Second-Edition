import React from "react";
export const CustomerForm = ({ original }) => {
  return (
    <form>
      <label htmlFor="firstName">First name</label>
      <input readOnly type="text" name="firstName" value={original.firstName} />
    </form>
  );
};
