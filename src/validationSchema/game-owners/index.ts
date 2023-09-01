import * as yup from 'yup';

export const gameOwnerValidationSchema = yup.object().shape({
  game_id: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
