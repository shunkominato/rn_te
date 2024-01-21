import { Box } from 'native-base';
import { ReactNode } from 'react';
import { DEFAULT_SCREEN_COLOR } from '../../../../style/color';

export default function InputShadow({ children }: { children: ReactNode }) {
  return (
    <Box
      width="100%"
      bg={DEFAULT_SCREEN_COLOR} // 背景色の追加
      borderColor={DEFAULT_SCREEN_COLOR}
      borderWidth="0"
      borderRadius="2xl"
      style={{
        shadowColor: '#888',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      {children}
    </Box>
  );
}
