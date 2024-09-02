import { useState } from "react";

export default function Player({
  name,
  symbol,
  activePlayer,
  handleNameChange,
}) {
  const [initName, setInitName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((edit) => !edit);
    if(isEditing){
      handleNameChange(symbol, initName)
    }
  };
  const handleInputChange = (event) => {
    setInitName(event.target.value);
  };

  return (
    <li className={activePlayer ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={initName} onChange={handleInputChange} />
        ) : (
          <span className="player-name">{initName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
