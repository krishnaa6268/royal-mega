import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';

// 🔹 Generic Custom Input
const CustomInput = ({
  label,
  type = 'text',
  showToggle,
  withDialCode,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (withDialCode) {
      helpers.setValue({ ...field.value, number: e.target.value });
    } else {
      helpers.setValue(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium text-white text-sm">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {withDialCode && (
          <select
            className="border rounded-l-md px-2 py-3 bg-gray-100 focus:outline-none"
            value={field.value?.dialCode || '+91'}
            onChange={(e) =>
              helpers.setValue({ ...field.value, dialCode: e.target.value })
            }
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
        )}

        <input
          {...(!withDialCode ? field : {})}
          {...props}
          type={showToggle ? (showPassword ? 'text' : 'password') : type}
          value={withDialCode ? field.value?.number || '' : field.value || ''}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            withDialCode ? 'rounded-l-none' : ''
          } ${
            meta.touched && meta.error
              ? 'border-red-500 focus:ring-red-400'
              : 'border-gray-300 focus:ring-blue-400'
          }`}
        />

        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 text-gray-600"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

// 🔹 PropTypes validation
CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  showToggle: PropTypes.bool,
  withDialCode: PropTypes.bool,
};

export default CustomInput;
