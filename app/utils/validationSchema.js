import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'At least 2 characters')
    .required('First Name is required'),

  lastName: Yup.string()
    .min(2, 'At least 2 characters')
    .required('Last Name is required'),

  username: Yup.string()
    .min(3, 'At least 3 characters')
    .required('Username is required'),

  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Password is required'),

  contact: Yup.mixed()
    .test('is-valid', 'Must be a valid email or mobile number', (value) => {
      if (!value) return false;

      // email case
      if (typeof value === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }

      // mobile case (for dial code object)
      if (typeof value === 'object') {
        const mobileRegex = /^[6-9]\d{9}$/;
        return mobileRegex.test(value.number || '');
      }

      return false;
    })
    .required('Email or Mobile is required'),

  acceptTerms: Yup.boolean().oneOf(
    [true],
    'You must accept Terms of Use and Privacy Policy',
  ),

  isAdult: Yup.boolean().oneOf([true], 'You must be at least 18 years old'),

  otp: Yup.string()
    .required('OTP is required')
    .matches(/^\d+$/, 'OTP must contain only digits') // Ensures only digits
    .min(6, 'OTP must be at least 6 digits long') // Example: minimum length of 6
    .max(6, 'OTP must be at most 6 digits long'), // Example: maximum length of 6
});
