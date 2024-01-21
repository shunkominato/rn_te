import { z } from 'zod';

const ERROR_MESSAGE = {
  MAX: '20文字以内で入力してください。',
  MIN: '入力してください。',
};

export const schema = z.object({
  nickName: z
    .string()
    .min(1, { message: ERROR_MESSAGE.MIN })
    .max(20, { message: ERROR_MESSAGE.MAX }),
});

export type SchemaType = z.infer<typeof schema>;
