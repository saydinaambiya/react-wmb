import React from "react";
import {useNavigate} from "react-router-dom";
import {Pagination, StyledContainer} from "../components";
import {Button} from "react-bootstrap";
import EmptyState from "../components/EmptyState";

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate();
        const {label, routeToAdd} = opts;
        const {listData} = props;
        const [currentPage, setCurrentPage] = React.useState(1);
        const [recordsPerPage] = React.useState(3);

        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = listData?.slice(indexOfFirstRecord, indexOfLastRecord);
        const totalPage = Math.ceil(listData?.length / recordsPerPage);

        return (
            <>
                <StyledContainer>
                    <Button variant="success" onClick={() => navigate(routeToAdd)}>Add {label}</Button>
                    {currentRecords?.length > 0 ? (
                        <ListComponent data={currentRecords} {...props}/>
                    ) : <EmptyState text={`Data ${label} Kosong`}/>}
                </StyledContainer>
                <Pagination
                    totalPage={totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}