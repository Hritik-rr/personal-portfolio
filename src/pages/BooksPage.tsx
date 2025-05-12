const BooksPage = () => {
  // Sample of books from the original site
  const books = [
    {
      title: "A Man Called Ove(Ongoing Read)",
      author: "Fredrik Backman",
      url: "/books/a-man-called-ove",
      coverUrl: "https://m.media-amazon.com/images/I/81g2oEdeGTL.jpg",
    },
  ];

  return (
    <>
      <h1 className="w-full text-2xl">Bookshelf</h1>

      <div className="mt-6 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {books.map((book, index) => (
          <a key={index} href={book.url} className="flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={book.coverUrl} alt={book.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium">{book.title}</h3>
              <p className="text-xs text-slate-500">{book.author}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default BooksPage;
