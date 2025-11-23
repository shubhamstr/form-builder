# @shubhamstr/form-builder

A lightweight, plug-and-play, JSON-based form builder for React applications. Build dynamic forms with minimal setup.

---

## ✨ Features

* JSON-driven dynamic form generation
* Supports all common input types
* Real-time form state updates via `onChange`
* Easy styling with custom classes and Tailwind
* Minimal, simple, and flexible

---

## 📦 Installation

```
npm install @shubhamstr/form-builder
```

```
yarn add @shubhamstr/form-builder
```

---

## 📄 Basic Usage

```jsx
import { FormBuilder } from "@shubhamstr/form-builder"

function App() {
  const schema = [
    { type: "text", name: "fullName", label: "Full Name", required: true },
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "pass", label: "Password" },
    { type: "number", name: "age", label: "Age" },
    { type: "textarea", name: "about", label: "About" },
    {
      type: "select",
      name: "country",
      label: "Country",
      options: ["India", "Japan"],
    },
    { type: "checkbox", name: "check", label: "Accept Terms" },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      options: ["Male", "Female"],
    },
    { type: "switch", name: "active", label: "Is Active?" },
    { type: "date", name: "dob", label: "Date of Birth" },
    { type: "file", name: "profilePic", label: "Profile Picture" },
  ]

  return (
    <FormBuilder
      schema={schema}
      onChange={(updatedJson) => console.log(updatedJson)}
      classNames="grid grid-cols-4 gap-4 p-5"
    />
  )
}

export default App
```

---

## 🧩 Schema Format

Each form field is an object in the schema array.

| Property    | Type    | Required | Description        |
| ----------- | ------- | -------- | ------------------ |
| type        | string  | Yes      | Input type         |
| name        | string  | Yes      | Unique key         |
| label       | string  | Yes      | Display label      |
| required    | boolean | No       | Required field     |
| placeholder | string  | No       | Placeholder text   |
| className   | string  | No       | Custom CSS classes |

---

## 💡 Supported Input Types

### 1. Text

```js
{ type: "text", name: "fullName", label: "Full Name" }
```

### 2. Email

```js
{ type: "email", name: "email", label: "Email" }
```

### 3. Password

```js
{ type: "password", name: "pass", label: "Password" }
```

### 4. Number

```js
{ type: "number", name: "age", label: "Age" }
```

### 5. Textarea

```js
{ type: "textarea", name: "about", label: "About" }
```

### 6. Select

```js
{
  type: "select",
  name: "country",
  label: "Country",
  options: ["India", "Japan"],
}
```

### 7. Checkbox

```js
{ type: "checkbox", name: "check", label: "Accept Terms" }
```

### 8. Radio

```js
{
  type: "radio",
  name: "gender",
  label: "Gender",
  options: ["Male", "Female"],
}
```

### 9. Switch

```js
{ type: "switch", name: "active", label: "Is Active?" }
```

### 10. Date

```js
{ type: "date", name: "dob", label: "Date of Birth" }
```

### 11. File Upload

```js
{ type: "file", name: "profilePic", label: "Profile Picture" }
```

---

## ⚙️ FormBuilder Props

| Prop          | Type     | Required | Description          |
| ------------- | -------- | -------- | -------------------- |
| schema        | Array    | Yes      | Field configuration  |
| onChange      | function | No       | Returns updated JSON |
| classNames    | string   | No       | Wrapper CSS classes  |
| initialValues | object   | No       | Pre-fill form        |
| disabled      | boolean  | No       | Disable full form    |

---

## 📤 Real-time Output Example

```json
{
  "fullName": "Shubham",
  "email": "demo@example.com",
  "check": true,
  "gender": "Male",
  "active": false
}
```

---

## 🎨 Styling Example

```jsx
<FormBuilder
  schema={schema}
  classNames="grid grid-cols-2 gap-4 bg-gray-100 p-6 rounded-xl"
/>
```

---

## 📌 Initial Values Example

```jsx
<FormBuilder
  schema={schema}
  initialValues={{ fullName: "Shubham", country: "India", active: true }}
/>
```

---

## 🧱 Roadmap

* Validation messages
* Custom components
* Conditional fields
* Yup/Zod integration
* Theme support

---

## 🤝 Contributing

1. Fork repo
2. Create a branch
3. Commit changes
4. Open PR

---

## 📄 License

MIT © 2025 — Shubham Sutar
