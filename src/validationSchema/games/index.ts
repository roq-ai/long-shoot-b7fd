import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  developer_id: yup.string().nullable().required(),
});
