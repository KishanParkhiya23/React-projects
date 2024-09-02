import Concept from "./Concept";
import { CORE_CONCEPTS } from "../data";

export default function CoreComponents() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((items) => (
          <Concept {...items} />
        ))}
      </ul>
    </section>
  );
}
