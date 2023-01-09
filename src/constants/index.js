const constants = {
    ACTION: {
        ADD_FOOD: "ADD_FOOD",
        ADD_TABLE: "ADD_TABLE",

        DELETE_FOOD: "DELETE_FOOD",
        DELETE_TABLE: "DELETE_TABLE",

        SET_TOKEN: "SET_TOKEN"
    },

    ROUTES: {
        DASHBOARD: "/",

        AUTH: "/auth",
        LOGIN: "/auth/login",
        MENU: "/menu",

        FOOD: "/menu/food",
        ADD_FOOD: "/menu/food/add",
        //
        // MENU_FOOD:"/menu/food",
        // MENU_BEVERAGE:"/menu/beverage",
        TABLE: "/table",
        ADD_TABLE: "/table/add"
    }
}

export default constants;