import React, { useState } from "react"

import TextField from "./components/TextField"
import NumberField from "./components/NumberField"
import PasswordField from "./components/PasswordField"
import TextareaField from "./components/TextareaField"
import SelectField from "./components/SelectField"
import CheckboxField from "./components/CheckboxField"
import RadioGroup from "./components/RadioGroup"
import SwitchField from "./components/SwitchField"
import DatePickerField from "./components/DatePickerField"
import FileUploaderField from "./components/FileUploaderField"

const FormBuilder = ({ schema = [], onChange, classNames = "" }) => {
  const [formSchema, setFormSchema] = useState(schema)

  const handleChange = (index, value) => {
    const updated = [...formSchema]
    updated[index].value = value
    setFormSchema(updated)

    // ⬅ return updated schema to parent
    if (onChange) onChange(updated)
  }

  const renderField = (field, index) => {
    const commonProps = {
      label: field.label,
      name: field.name,
      required: field.required,
      placeholder: field.placeholder,
      classNames: field.classNames,
    }

    switch (field.type) {
      case "text":
      case "email":
        return (
          <TextField
            key={field.name}
            {...commonProps}
            type={field.type}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "number":
        return (
          <NumberField
            key={field.name}
            {...commonProps}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "password":
        return (
          <PasswordField
            key={field.name}
            {...commonProps}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "textarea":
        return (
          <TextareaField
            key={field.name}
            {...commonProps}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "select":
        return (
          <SelectField
            key={field.name}
            {...commonProps}
            options={field.options}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "checkbox":
        return (
          <CheckboxField
            key={field.name}
            {...commonProps}
            checked={!!field.value}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "radio":
        return (
          <RadioGroup
            key={field.name}
            {...commonProps}
            options={field.options}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "switch":
        return (
          <SwitchField
            key={field.name}
            {...commonProps}
            checked={!!field.value}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "date":
        return (
          <DatePickerField
            key={field.name}
            {...commonProps}
            value={field.value || ""}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      case "file":
        return (
          <FileUploaderField
            key={field.name}
            {...commonProps}
            onChange={(name, value) => handleChange(index, value)}
          />
        )

      default:
        return (
          <div key={field.name}>⚠️ Unsupported field type: {field.type}</div>
        )
    }
  }

  return (
    <div className={classNames}>
      {formSchema.map((field, index) => renderField(field, index))}
    </div>
  )
}

export default FormBuilder
