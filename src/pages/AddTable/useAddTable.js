import React from "react";
import {onChangeText} from "../../utils/eventHandler";

const useAddTable = () => {
    const [tableId, setTableId] = React.useState("");
    const [tableNumber, setTableNumber] = React.useState("");
    const [tableStats, setTableStats] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {tableId, tableNumber, tableStats, isDisable};
    const setter = {
        tableId: onChangeText(setTableId),
        tableNumber: onChangeText(setTableNumber),
        tableStats: onChangeText(setTableStats),
    }

    React.useEffect(() => {
        if (tableId && tableNumber && tableStats) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [tableId, tableNumber, tableStats])

    return {
        getter, setter
    }
}

export default useAddTable;