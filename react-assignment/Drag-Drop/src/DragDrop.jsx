
import React, { useState } from "react";
import "./DragDrop.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

// Sample tasks
const item1 = { id: uuidv4(), name: "Clean the house" };
const item2 = { id: uuidv4(), name: "Wash the car" };

function DragDrop() {
  const [text, setText] = useState("");

  // Task board state
  const [state, setState] = useState({
    todo: {
      title: "To Do",
      items: [item1, item2],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  });

  // Handle drag-and-drop
  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const sourceColumn = state[source.droppableId];
    const destinationColumn = state[destination.droppableId];

    const newSourceItems = [...sourceColumn.items];
    const [movedItem] = newSourceItems.splice(source.index, 1);

    const newDestinationItems = [...destinationColumn.items];
    newDestinationItems.splice(destination.index, 0, movedItem);

    setState((prev) => ({
      ...prev,
      [source.droppableId]: { ...sourceColumn, items: newSourceItems },
      [destination.droppableId]: { ...destinationColumn, items: newDestinationItems },
    }));
  };

  // Add new task to "To Do" list
  const addItem = () => {
    if (!text.trim()) return;

    setState((prev) => ({
      ...prev,
      todo: {
        title: "To Do",
        items: [{ id: uuidv4(), name: text }, ...prev.todo.items],
      },
    }));

    setText(""); // Clear input field
  };

  return (
    <div className="App">
      {/* Input field for adding new tasks */}
      <div className="input-section">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addItem}>Add Task</button>
      </div>

      {/* Drag and Drop Context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board">
          {Object.entries(state).map(([key, data]) => (
            <div key={key} className="column">
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`droppable-col ${snapshot.isDraggingOver ? "dragging-over" : ""}`}
                  >
                    {data.items.map((el, index) => (
                      <Draggable key={el.id} index={index} draggableId={el.id}>
                        {(provided, snapshot) => (
                          <div
                            className={`item ${snapshot.isDragging ? "dragging" : ""}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {el.name}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default DragDrop;

