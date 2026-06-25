const validate = () => {
  let errors = {};

  // First Name
  if (!formData.firstName.trim()) {
    errors.firstName = "First Name is required";
  } else if (formData.firstName.length < 3) {
    errors.firstName = "Minimum 3 characters required";
  } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
    errors.firstName = "Only alphabets allowed";
  }

  // Last Name
  if (!formData.lastName.trim()) {
    errors.lastName = "Last Name is required";
  } else if (formData.lastName.length < 2) {
    errors.lastName = "Minimum 2 characters required";
  } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
    errors.lastName = "Numbers not allowed";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.(com|in)$/.test(formData.email)
  ) {
    errors.email = "Enter valid email";
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      formData.password
    )
  ) {
    errors.password =
      "Password must contain Uppercase, Lowercase, Number & Special Character";
  }

  // Confirm Password
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm Password required";
  } else if (/\s/.test(formData.confirmPassword)) {
    errors.confirmPassword = "Spaces not allowed";
  } else if (
    formData.password !== formData.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Age
  if (!formData.age) {
    errors.age = "Age is required";
  } else if (
    isNaN(formData.age) ||
    formData.age < 18 ||
    formData.age > 60
  ) {
    errors.age = "Age must be between 18 and 60";
  }

  // Mobile
  if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
    errors.mobile =
      "Mobile must be 10 digits and start with 6,7,8,9";
  }

  // Gender
  if (!formData.gender) {
    errors.gender = "Select Gender";
  }

  // Course
  if (!formData.course) {
    errors.course = "Select Course";
  }

  // Skills
  if (formData.skills.length < 2) {
    errors.skills = "Select at least 2 skills";
  } else if (formData.skills.length > 4) {
    errors.skills = "Maximum 4 skills allowed";
  }

  // Address
  if (!formData.address.trim()) {
    errors.address = "Address is required";
  } else if (formData.address.length < 20) {
    errors.address =
      "Address must be at least 20 characters";
  } else if (formData.address.length > 150) {
    errors.address =
      "Address cannot exceed 150 characters";
  }

  // Terms
  if (!formData.agree) {
    errors.agree =
      "Please accept Terms & Conditions";
  }

  return errors;
};