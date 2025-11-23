import React from "react"

const DatePickerField = ({
  label,
  name,
  value,
  classNames = "",
  required,
  onChange,
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label>{label}</label>}
      <input
        type="date"
        name={name}
        value={value || ""}
        className={classNames}
        required={required}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: 4,
        }}
      />
    </div>
  )
}

export default DatePickerField
