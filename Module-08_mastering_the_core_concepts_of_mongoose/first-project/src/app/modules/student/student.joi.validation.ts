import Joi from 'joi';

// creating a schema validation using joi
// Joi Schema for UserName
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(15)
    .required()
    .regex(/^[A-Z][a-z]*$/, 'capitalize format')
    .messages({
      'string.base': 'First name must be a string',
      'string.empty': 'First name is required',
      'string.max': 'Maximum allowed length for first name is 15 characters',
      'string.pattern.name': '{#label} is not in capitalize format',
    }),
  middleName: Joi.string().trim().allow(''),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/, 'alpha')
    .messages({
      'string.base': 'Last name must be a string',
      'string.empty': 'Last name is required',
      'string.pattern.name': '{#label} is not valid',
    }),
});

// Joi Schema for Guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.base': "Father's name must be a string",
    'string.empty': "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.base': "Father's occupation must be a string",
    'string.empty': "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.base': "Father's contact number must be a string",
    'string.empty': "Father's contact number is required",
  }),
  motherName: Joi.string().trim().required().messages({
    'string.base': "Mother's name must be a string",
    'string.empty': "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    'string.base': "Mother's occupation must be a string",
    'string.empty': "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    'string.base': "Mother's contact number must be a string",
    'string.empty': "Mother's contact number is required",
  }),
});

// Joi Schema for LocalGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': "Local guardian's name must be a string",
    'string.empty': "Local guardian's name is required",
  }),
  occupation: Joi.string().required().messages({
    'string.base': "Local guardian's occupation must be a string",
    'string.empty': "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    'string.base': "Local guardian's contact number must be a string",
    'string.empty': "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    'string.base': "Local guardian's address must be a string",
    'string.empty': "Local guardian's address is required",
  }),
});

// Joi Schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.base': 'Student ID must be a string',
    'string.empty': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only':
      '{#label} is not supported. It must be either "male" or "female"',
    'string.base': 'Gender must be a string',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': '{#label} is not valid email',
    'string.empty': 'Email is required',
  }),
  contactNumber: Joi.string().required().messages({
    'string.base': 'Contact number must be a string',
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.base': 'Emergency contact number must be a string',
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
    .messages({
      'any.only': '{#label} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.base': 'Present address must be a string',
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.base': 'Permanent address must be a string',
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local guardian information is required',
  }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only':
      '{#label} is not supported. It must be either "active" or "blocked"',
  }),
});

export default studentValidationSchema;
