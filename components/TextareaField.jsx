import React from "react"

const TextareaField = ({
  label,
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

      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className={classNames}
        value={value || ""}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          width: "100%",
          minHeight: 80,
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: 4,
        }}
      />
    </div>
  )
}

export default TextareaField
