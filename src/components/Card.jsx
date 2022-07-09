import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          className="m-[8px] bg-white overflow-hidden cursor-pointer rounded-md p-[10px]"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <p>{data.title}</p>
          <p>{data.status}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
