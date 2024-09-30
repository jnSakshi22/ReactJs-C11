const Text = (meriProps) => {
  console.log("Props: ", meriProps);
  return (
    <p
      title={meriProps.title || "Hello"}
      style={{
        color: meriProps.color || "black",
        fontSize: `${meriProps.size || 12}px`,
        fontWeight: meriProps.weight,
      }}
    >
      {meriProps.label}
    </p>
  );
};

export default Text;
