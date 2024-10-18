import React, { PropsWithChildren } from 'npm:react';
import { Box } from 'npm:ink';

const MainLayout = ({ children }: PropsWithChildren) => {
  return <Box>{children}</Box>;
};

export default MainLayout;
