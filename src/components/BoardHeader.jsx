import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";

const BoardHeader = ({ searchData, searchDataValue }) => {
  return (
    <div className="board_header w-full flex flex-row items-center">
      <p className="font-bold text-lg p-3 text-white">Kanban Board</p>
      <div>
        <input
          placeholder="Search... Name or Status"
          className="p-2 rounded-md"
          value={searchDataValue}
          onChange={(e) => {
            searchData(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchDataValue: state.trello.searchDataValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchData: (payload) => dispatch(actions.searchData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardHeader);
