import "./App.css";
import Board from "./components/Board";
import BoardHeader from "./components/BoardHeader";
import Header from "./components/Header";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import actions from "./redux/actions";
import { useState } from "react";
import Card from "./components/Card";
import InputBox from "./components/InputBox";

function App({
  trelloData,
  addBoard,
  moveCardSameList,
  moveCardDifferentList,
  searchDataValue,
  moveBoard,
}) {
  const [openBoard, setOpenBoard] = useState(false);
  const [boardName, setBoardName] = useState("");

  const handleChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleNewBoard = () => {
    addBoard(boardName, boardName.toLocaleLowerCase(), () => {
      setOpenBoard(false);
      setBoardName("");
    });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log({ destination, source, draggableId });
    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = trelloData.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      moveBoard(newListIds);
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceList = trelloData.lists[source.droppableId];
    const destinationList = trelloData.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    console.log({ sourceList, destinationList, draggingCard });

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      moveCardSameList(source.droppableId, destinationList);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      moveCardDifferentList(
        sourceList.id,
        destinationList.is,
        sourceList,
        destinationList
      );
    }
  };

  const filterData = trelloData.listIds
    .map((ele) =>
      trelloData.lists[ele].cards.filter(
        (ele) =>
          ele.status.includes(searchDataValue, 0) ||
          ele.title.includes(searchDataValue, 0)
      )
    )
    .flat();

  return (
    <div className="App">
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="main_board" type="list" direction="horizontal">
          {(provided) => (
            <main
              className="board bg-[#0079bf] pt-3 flex flex-col flex-1 h-full"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <BoardHeader />
              <div className="w-full flex flex-row overflow-x-auto pt-3">
                {searchDataValue ? (
                  <Droppable>
                    {() => (
                      <div className="flex flex-wrap justify-center items-center min-w-[300px] mx-3 bg-[#ebecf0] rounded-lg max-w-[500px]">
                        {filterData.flat().map((ele) => (
                          <Card data={ele} />
                        ))}
                        {filterData.length === 0 && (
                          <p className="p-4 text-red-700 font-semibold">
                            {"Sorry No Search results, It's Case senstitve...!"}
                          </p>
                        )}
                      </div>
                    )}
                  </Droppable>
                ) : (
                  <>
                    {trelloData.listIds.map((ele, index) => (
                      <Board
                        data={trelloData.lists[ele]}
                        index={index}
                        key={index}
                      />
                    ))}
                    <div className="min-w-[250px] mx-3  rounded-lg max-w-[250px]">
                      <InputBox
                        open={openBoard}
                        value={boardName}
                        handleChange={handleChange}
                        handleAdd={handleNewBoard}
                        handleClose={setOpenBoard}
                        label={"Add Board"}
                        addLabel={"Add New Board"}
                      />
                    </div>
                  </>
                )}
              </div>
              {provided.placeholder}
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trelloData: state.trello.trelloData,
    searchDataValue: state.trello.searchDataValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: (title, id, callback) =>
      dispatch(actions.addBoard(title, id, callback)),
    moveCardSameList: (id, newCards) =>
      dispatch(actions.moveCardSameList(id, newCards)),
    moveCardDifferentList: (id1, id2, newCards1, newCards2) =>
      dispatch(actions.moveCardDifferentList(id1, id2, newCards1, newCards2)),
    moveBoard: (payload) => dispatch(actions.moveBoard(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// arrayOfElements.map((element) => {
//   return { ...element, subElements: element.subElements.filter((subElement) => subElement.surname === 1) }
// })
