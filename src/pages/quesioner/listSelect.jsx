import RadioSelect from "../../components/radio-select/radioSelect";
const ListSelect = ({ name }) => {
  return (
    <section className="flex space-x-2 md:space-x-5">
      <RadioSelect label="sangat buruk" name={name} />
      <RadioSelect label="buruk" name={name} />
      <RadioSelect label="sedang" name={name} />
      <RadioSelect label="baik" name={name} />
      <RadioSelect label="sangat baik" name={name} />
    </section>
  );
};

export default ListSelect;
