import * as yup from 'yup';

export const gameTesterValidationSchema = yup.object().shape({
  game_id: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
