import Input from "./Input";

export default function UserInputs({ userInputs, handleChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          handleChangeInput={handleChangeInput}
          value={userInputs.initialInvestment}
          lblText="Initial investment"
          functionString="initialInvestment"
        />
        <Input
          handleChangeInput={handleChangeInput}
          value={userInputs.annualInvestment}
          lblText="Annual investment"
          functionString="annualInvestment"
        />
      </div>
      <div className="input-group">
        <Input
          handleChangeInput={handleChangeInput}
          value={userInputs.expectedReturn}
          lblText="Expected return"
          functionString="expectedReturn"
        />
        <Input
          handleChangeInput={handleChangeInput}
          value={userInputs.duration}
          lblText="Duration"
          functionString="duration"
        />
      </div>
    </section>
  );
}
