"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fields = [
  {
    name: "username",
    placeholder: "Username",
  },
  {
    name: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
  },
];
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = e =>
    setFormData(form => ({ ...form, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // verification /fetch
    if (fields.some(field => !formData[field.name])) return;

    if (formData.password !== formData.confirmPassword)
      return router.push("/signup/failure");
    router.push("/signup/success");
  };
  return (
    <main id="main" className={styles.main}>
      <h1>Sign Up</h1>
      <form id="signup" onSubmit={handleSubmit}>
        {fields.map(field => (
          <input key={field.name} {...field} onChange={handleChange} />
        ))}
        <button
          type="submit"
          disabled={fields.some(field => !formData[field.name])}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
