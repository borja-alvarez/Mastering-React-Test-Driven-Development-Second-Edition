import React from "react";
export const CustomerForm = ({ original }) => {
  return (
    <form>
      <label htmlFor="firstName">First name</label>
      <input readOnly type="text" id="firstName" name="firstName" value={original.firstName} />
    </form>
  );
};
