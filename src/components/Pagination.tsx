interface PaginationProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPages: number;
}

const Pagination = (props: PaginationProp) => {
  const { setPage, page, totalPages } = props;
  return (
    <>
      <img
        src="/icons/arrow-l.svg"
        alt="arrow-l"
        className={page === 1 ? "disabled" : ""}
        width={"50px"}
        height={"50px"}
        loading="lazy"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      />
      <img
        src="/icons/arrow-r.svg"
        alt="arrow-r"
        className={page === totalPages ? "disabled" : ""}
        width={"50px"}
        height={"50px"}
        loading="lazy"
        onClick={() => {
          if (page < totalPages) {
            setPage(page + 1);
          }
        }}
      />
    </>
  );
};

export default Pagination;
