import constants from "../../constants";

export const addTable = (table) => ({
    type: constants.ACTION.ADD_TABLE,
    payload: {
        tableId: table.tableId,
        tableNumber: table.tableNumber,
        tableStats: table.tableStats,
    }
})

export const deleteTable = (id) => ({
    type: constants.ACTION.DELETE_TABLE,
    payload: id
})