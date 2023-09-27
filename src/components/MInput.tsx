function MInput(props: {
  value: string;
  type?: "text";
  onChange: (val: string) => void;
}) {
  const { value, onChange, type = "text" } = props;
  return (
    <input
      className=" bg-slate-800 outline-none text-gray-100"
      type={type}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
export default MInput;
