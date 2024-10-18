import React from "npm:react";
import { render, Box, Text, useFocus } from "npm:ink";

const Focus = () => (
  <Box flexDirection="column" padding={1}>
    <Box marginBottom={1}>
      <Text>
        Press Tab to focus next element, Shift+Tab to focus previous element,
        Esc to reset focus.
      </Text>
    </Box>
    <Item label="First" />
    <Item label="Second" />
    <Item label="Third" />
  </Box>
);

const Item = ({label}: {label: string}) => {
  const {isFocused} = useFocus();

  return (
    <Text>
      {label} {isFocused && <Text color="green">(focused)</Text>}
    </Text>
  );
};


render(<Focus />);
