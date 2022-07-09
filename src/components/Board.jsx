import React, { useState } from "react";
import Card from "./Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import actions from "../redux/actions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import InputBox from "./InputBox";

const Board = ({ data, index, addCard }) => {
  const [openNewCard, setOpenNewCard] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleNewCard = () => {
    addCard(
      {
        title: taskName,
        status: "active",
        id: uuid(),
      },
      data.id,
      () => {
        setOpenNewCard(false);
        setTaskName("");
      }
    );
  };
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          className="min-w-[250px] mx-3 bg-[#ebecf0] rounded-lg max-w-[250px]"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <p className="text-left text-[#172b4d] px-[10px] py-[8px] font-medium">
            {data.title}
          </p>
          <div>
            <Droppable droppableId={data.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {data.cards.map((ele, index) => (
                    <Card data={ele} index={index} key={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <InputBox
            open={openNewCard}
            value={taskName}
            handleChange={handleChange}
            handleAdd={handleNewCard}
            handleClose={setOpenNewCard}
            label={"Add Card"}
            addLabel={"Add New Card"}
          />
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (payload, id, callback) =>
      dispatch(actions.addCard(payload, id, callback)),
  };
};

export default connect(null, mapDispatchToProps)(Board);
