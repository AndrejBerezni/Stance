const handleKeyPress = (
  event: React.KeyboardEvent,
  handleKeyDown: () => void,
  ...keys: string[]
) => {
  if (keys.includes(event.key)) {
    handleKeyDown();
  }
};

export default handleKeyPress;
