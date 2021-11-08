const pagesToShow = ({
  currentPage,
  numberOfPages,
}: {
  currentPage: number;
  numberOfPages: number;
}): number[] => {
  const pages = [
    1,
    2,
    3,
    ...[...new Array(5)].map((_, offset) => currentPage - 5 + offset),
    currentPage,
    ...[...new Array(5)].map((_, offset) => currentPage + 1 + offset),
  ].filter((page) => page > 0 && page <= numberOfPages);

  return Array.from(new Set(pages));
};

interface Props {
  numberOfPages: number;
  currentPage: number;
  renderLink: React.FC<{ page: number }>;
}

export const Pagination: React.FC<Props> = ({
  numberOfPages,
  currentPage,
  renderLink,
}) => {
  const pages = pagesToShow({ numberOfPages, currentPage });
  return (
    <div className="flex items-center justify-center mb-4 mt-16">
      {/* {pages.map((page, index) => (
        <React.Fragment key={page}>
          {index > 0 && pages[index - 1] !== page - 1 && (
            <Page data-test={`pagination-page-${page}`}>...</Page>
          )}
          <Page
            data-test={`pagination-page-${page}`}
            weight="bold"
            size="18"
            color={page === currentPage ? 'secondary' : 'primaryDark'}
          >
            {currentPage === page
              ? page.toString()
              : renderLink({ page, children: page.toString() })}
          </Page>
          {index === pages.length - 1 && pages[index] !== numberOfPages && (
            <Page data-test={`pagination-page-${page}`} weight="bold" size="18">
              ...
            </Page>
          )}
        </React.Fragment>
      ))} */}
      {pages.map((page, index) => {
        const className = `
          text-blue-500
          bg-transparent
          

          ${index === 0 ? "border-l " : "border-l border-r"}
          
          border-t border-b
          border-blue-500

          ${
            currentPage !== page
              ? "hover:bg-blue-500 hover:text-white active:bg-blue-600"
              : "cursor-default"
          }
          
          font-bold
          uppercase
          text-xs
          px-4
          py-2
          ${index === 0 ? "rounded-l" : ""}
          ${index === pages.length - 1 ? "rounded-r" : ""}
          outline-none
          focus:outline-none
          mb-1
          ease-linear
          transition-all
          duration-150
        `;

        return currentPage === page ? (
          <span className={className}>{page.toString()}</span>
        ) : (
          renderLink({
            page,
            children: <a className={className}>{page.toString()}</a>,
          })
        );
      })}
    </div>
  );
};
