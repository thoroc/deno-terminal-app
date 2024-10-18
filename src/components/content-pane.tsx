import React from 'npm:react';
import BigText from 'npm:ink-big-text';
import Gradient from 'npm:ink-gradient';
import { Box, Text } from 'npm:ink';

export type ContentPaneProps = {
  name: string;
  text: string;
  content: string;
};

const ContentPane = ({ name, text, content }: ContentPaneProps) => {
  return (
    <Box
      borderStyle={'single'}
      height={'100%'}
      width={'100%'}
      flexDirection={'column'}
      paddingLeft={4}
      paddingRight={4}
    >
      <Gradient name={name}>
        <BigText text={text} />
      </Gradient>
      <Text>{content}</Text>
    </Box>
  );
};

export default ContentPane;
