import React from "react"

const SelectField = ({
  label,
  name,
  value,
  options = [],
  required = false,
  classNames = "",
  onChange,
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label>{label}</label>}

      <select
        name={name}
        required={required}
        value={value || ""}
        className={classNames}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: 4,
        }}
      >
        <option value="">Select...</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
