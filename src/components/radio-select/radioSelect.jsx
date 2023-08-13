/** @format */

const RadioSelect = ({ label, name }) => {
  return (
    <label className="flex flex-col items-center">
      <span>{label}</span>
      <input type="radio" name={name} className="radio radio-info radio-xs md:radio-sm" checked />
    </label>
  );
};

export default RadioSelect;
