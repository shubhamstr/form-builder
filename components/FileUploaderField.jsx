import React from "react"

const FileUploaderField = ({ label, name, classNames = "", onChange }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label>{label}</label>}
      <input
        type="file"
        name={name}
        className={classNames}
        onChange={(e) => onChange(name, e.target.files[0])}
        style={{
          display: "block",
          width: "100%",
          marginTop: 4,
        }}
      />
    </div>
  )
}

export default FileUploaderField
