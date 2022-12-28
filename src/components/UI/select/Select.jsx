import React from "react";

export default function Select({options, defaultValue, value, onChange}) {
  return (
    <div>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option disabled value="Value1">{defaultValue}</option>
        {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
      </select>
    </div>
  );
}
