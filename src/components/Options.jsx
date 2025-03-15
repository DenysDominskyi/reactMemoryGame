import React from "react";

export const Options = ({ valueArray }) => {
  const optionsEl = valueArray.map(({ name, value }) => (
    <option key={value} value={value}>
      {name ? name : value}
    </option>
  ));

  return <>{optionsEl}</>;
};
