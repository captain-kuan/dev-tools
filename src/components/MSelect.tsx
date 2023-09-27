interface Option {
  label: string;
  value: string | number;
}
function MSelect(props: {
  value: string;
  options: Option[];
  onChange: (v: string) => void;
}) {
  const { value, options, onChange } = props;
  return (
    <select
      className=" w-full rounded px-2 py-1 bg-slate-900 text-gray-100 outline-none "
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default MSelect;
