import MaterialPagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

const Pagination = ({ currentPage, handlePageChange, isDisabled }) => {
  return (
    <Stack spacing={3}>
      <MaterialPagination
        count={10}
        boundaryCount={2}
        page={currentPage}
        onChange={handlePageChange}
        disabled={isDisabled}
        variant={"outlined"}
        shape={"rounded"}
      />
    </Stack>
  );
};

export default Pagination;
