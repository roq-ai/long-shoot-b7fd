import * as yup from 'yup';

export const customerSupportValidationSchema = yup.object().shape({
  issue_id: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
