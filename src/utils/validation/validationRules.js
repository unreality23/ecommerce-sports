export const validationRules = {
  name: { required: true },
  password: {
    required: true,
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  },
  confirmPassword: { required: true },
  email: { required: true, pattern: /\S+@\S+\.\S+/ },
  confirmEmail: { required: true },
  gender: {
    required: true,
  },
  dob: {
    required: true,
    validate: (dob) => {
      const today = new Date();
      const dobDate = new Date(dob);
      let age = today.getFullYear() - dobDate.getFullYear();
      const month = today.getMonth() - dobDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
        age--;
      }

      return age >= 18;
    },
  },
  phoneNumber: { required: true, pattern: /^\+44[7][0-9]{9}$/ },
  address: { required: true },
};
