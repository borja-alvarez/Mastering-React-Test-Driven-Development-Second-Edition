import React from "react";
export const CustomerForm = ({ original }) => {
  return (
    <form>
      <input
        readOnly
        type="text"
        name="firstName"
        value={original.firstName}
      />
    </form>
  );
};
