import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { AuthorList } from "./AuthorList";
import { reorderColors } from "./reorder";
import { ColorMap } from "./types";

function App() {
  const [colors, setColors] = useState<ColorMap>({
    a: ["blue", "red", "yellow"],
    b: ["pink"],
    c: ["green", "tan"],
  });
  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }

        setColors(reorderColors(colors, source, destination));
      }}
    >
      <div>
        {Object.entries(colors).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            colors={v}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default App;
