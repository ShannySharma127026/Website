import { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    mobile: "",
    gender: "",
    course: "",
    skills: [],
    address: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "skills") {
      let updatedSkills = [...formData.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter(
          (skill) => skill !== value
        );
      }

      setFormData({
        ...formData,
        skills: updatedSkills,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = "Minimum 3 characters required";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "Only alphabets allowed";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Minimum 2 characters required";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Only alphabets allowed";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.(com|in)$/.test(formData.email)
    ) {
      newErrors.email = "Enter valid email";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Min 8 chars, uppercase, lowercase, number & special char";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Confirm Password is required";
    } else if (/\s/.test(formData.confirmPassword)) {
      newErrors.confirmPassword =
        "Spaces are not allowed";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    // Age
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (
      isNaN(formData.age) ||
      formData.age < 18 ||
      formData.age > 60
    ) {
      newErrors.age = "Age must be between 18 and 60";
    }

    // Mobile
    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Enter valid 10 digit mobile number";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender = "Select Gender";
    }

    // Course
    if (!formData.course) {
      newErrors.course = "Select Course";
    }

    // Skills
    if (formData.skills.length < 2) {
      newErrors.skills = "Select minimum 2 skills";
    } else if (formData.skills.length > 4) {
      newErrors.skills = "Maximum 4 skills allowed";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 20) {
      newErrors.address =
        "Address must be at least 20 characters";
    } else if (formData.address.length > 150) {
      newErrors.address =
        "Address cannot exceed 150 characters";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms =
        "Please accept Terms & Conditions";
    }

    console.log(
        `
        firstName: ${formData.firstName},
        lastName: ${formData.lastName},
        email: ${formData.email},
        password: ${formData.password},
        confirmPassword: ${formData.confirmPassword},
        age: ${formData.age},
        mobile: ${formData.mobile},
        gender: ${formData.gender},
        course: ${formData.course},
        skills: ${formData.skills.join(", ")},
        address: ${formData.address},
        terms: ${formData.terms}   
        `
    )

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        mobile: "",
        gender: "",
        course: "",
        skills: [],
        address: "",
        terms: false,
      });

      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <p className="error">{errors.firstName}</p>

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <p className="error">{errors.lastName}</p>

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <p className="error">{errors.age}</p>

        <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <p className="error">{errors.mobile}</p>

        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          /> Female

          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === "Other"}
            onChange={handleChange}
          /> Other
        </div>
        <p className="error">{errors.gender}</p>

        <label>Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="MERN">MERN</option>
          <option value="Java">Java</option>
        </select>
        <p className="error">{errors.course}</p>

        <label>Skills</label>
        <div>
          <input
            type="checkbox"
            name="skills"
            value="HTML"
            onChange={handleChange}
            checked={formData.skills.includes("HTML")}
          /> HTML

          <input
            type="checkbox"
            name="skills"
            value="CSS"
            onChange={handleChange}
            checked={formData.skills.includes("CSS")}
          /> CSS

          <input
            type="checkbox"
            name="skills"
            value="JavaScript"
            onChange={handleChange}
            checked={formData.skills.includes("JavaScript")}
          /> JavaScript

          <input
            type="checkbox"
            name="skills"
            value="React"
            onChange={handleChange}
            checked={formData.skills.includes("React")}
          /> React
        </div>
        <p className="error">{errors.skills}</p>

        <label>Address</label>
        <textarea
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <p className="error">{errors.address}</p>

        <div>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          I Agree Terms & Conditions
        </div>
        <p className="error">{errors.terms}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;