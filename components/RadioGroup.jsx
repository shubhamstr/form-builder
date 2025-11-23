import React from "react"

const RadioGroup = ({
  label,
  name,
  options = [],
  value,
  classNames = "",
  onChange,
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label>{label}</label>}

      <div style={{ marginTop: 4 }}>
        {options.map((opt, index) => (
          <label key={index} style={{ marginRight: 12, cursor: "pointer" }}>
            <input
              type="radio"
              name={name}
              value={opt.value || opt}
              className={classNames}
              checked={value === (opt.value || opt)}
              onChange={(e) => onChange(name, e.target.value)}
              style={{ marginRight: 4 }}
            />
            {opt.label || opt}
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
