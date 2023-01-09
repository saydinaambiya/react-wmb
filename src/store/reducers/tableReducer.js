import tableList from "../../fixtures/tableList.json";
import constants from "../../constants";

const {count, totalPage, page, size} = tableList;
const initialState = {
    tableList: [
        ...tableList.data
    ],
    pagination: {
        count, totalPage, page, size
    }
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_TABLE:
            return {
                ...state,
                tableList: [...state.tableList, action.payload]
            }
        case constants.ACTION.DELETE_TABLE:
            const tableListCopy = [...state?.tableList];
            const tableWithIdIndex = tableListCopy?.findIndex((table) => {
                return table.tableId === action.payload
            })
            tableListCopy.splice(tableWithIdIndex, 1);
            return {
                ...state,
                tableList: tableListCopy
            }
        default: return {
            ...initialState
        }
    }
}

export default tableReducer;