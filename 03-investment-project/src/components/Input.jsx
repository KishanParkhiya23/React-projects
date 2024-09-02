export default function Input({ lblText, handleChangeInput, value, functionString }) {
  return (
    <p>
      <label>{lblText}</label>
      <input type="number" value={value} onChange={(event) => handleChangeInput(functionString, event.target.value)}/>
    </p>
  );
}
