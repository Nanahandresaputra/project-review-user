/** @format */

const RadioSelect = ({ label, name }) => {
  return (
    <label className="flex flex-col items-center">
      <span>{label}</span>
      <input type="radio" name={name} className="radio radio-info radio-xs md:radio-sm" />
    </label>
  );
};

export default RadioSelect;
