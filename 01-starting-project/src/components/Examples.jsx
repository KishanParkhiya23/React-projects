import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedClick, setSelectedClick] = useState();
  function handleClick(selectedBtn) {
    setSelectedClick(selectedBtn);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              setClass={selectedClick === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              setClass={selectedClick === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              setClass={selectedClick === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              setClass={selectedClick === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedClick ? (
          <p>Please select option</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedClick].title}</h3>
            <p>{EXAMPLES[selectedClick].description}</p>
            <pre>
              <code>{EXAMPLES[selectedClick].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
