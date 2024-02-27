import { Picker } from "@react-native-picker/picker";

export function PickerItem({ moedas, moedaSelecionada, onChange }) {
  let moedasItem = moedas.map((item, index) => {
    return <Picker.Item value={item.key} key={index} label={item.key} />;
  });

  return (
    <Picker
      selectedValue={moedaSelecionada}
      onValueChange={(valor) => onChange(valor)}
    >
      {moedasItem}
    </Picker>
  );
}
