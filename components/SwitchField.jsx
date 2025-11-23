import React from "react"

const SwitchField = ({ label, name, checked, classNames = "", onChange }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
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

export default SwitchField
