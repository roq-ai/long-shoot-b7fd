import * as yup from 'yup';

export const issueValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  customer_support_id: yup.string().nullable().required(),
});
