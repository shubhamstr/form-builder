import React from "react"

const CheckboxField = ({ label, name, checked, classNames = "", onChange }) => {
  return (
    <div style={{ margin: "8px 0" }}>
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          name={name}
          checked={checked || false}
          className={classNames}
          onChange={(e) => onChange(name, e.target.checked)}
          style={{ marginRight: 8 }}
        />
        {label}
      </label>
    </div>
  )
}

export default CheckboxField
