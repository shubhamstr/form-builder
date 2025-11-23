import React from "react"

const TextField = ({
  label,
  type = "text",
  name,
  value,
  required = false,
  placeholder = "",
  classNames = "",
  onChange,
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label>{label}</label>}

      <input
        type={type}
        name={name}
        value={value || ""}
        required={required}
        placeholder={placeholder}
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
      />
    </div>
  )
}

export default TextField
