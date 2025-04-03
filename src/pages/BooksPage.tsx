const BooksPage = () => {
  // Sample of books from the original site
  const books = [
    {
      title: "There Is No Antimimetics Division",
      author: "Qntm",
      url: "/books/there-is-no-antimimetics-division",
      coverUrl: "https://ext.same-assets.com/1789066023/2471393576.jpeg"
    },
    {
      title: "Seeing Is Forgetting the Name of the Thing One Sees: Over Thirty Years of Conversations with Robert Irwin",
      author: "Lawrence Weschler",
      url: "/books/seeing-is-forgetting-the-name-of-what-one-sees",
      coverUrl: "https://ext.same-assets.com/1789066023/2366297458.jpeg"
    },
    {
      title: "Underground: The Tokyo Gas Attack and the Japanese Psyche",
      author: "Haruki Murakami",
      url: "/books/underground",
      coverUrl: "https://ext.same-assets.com/1789066023/639831926.jpeg"
    },
    {
      title: "The Rings of Saturn",
      author: "W. G. Sebald",
      url: "/books/the-rings-of-saturn",
      coverUrl: "https://ext.same-assets.com/1789066023/1093907067.jpeg"
    },
    {
      title: "Light Years",
      author: "James Salter",
      url: "/books/light-years",
      coverUrl: "https://ext.same-assets.com/1789066023/2778646173.jpeg"
    },
    {
      title: "The Power Broker",
      author: "Robert Caro",
      url: "/books/the-power-broker",
      coverUrl: "https://ext.same-assets.com/1789066023/916516592.jpeg"
    },
  ];

  return (
    <>
      <h1 className="text-2xl w-full">Bookshelf</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6 w-full">
        {books.map((book, index) => (
          <a key={index} href={book.url} className="flex flex-col">
            <div className="h-48 w-full relative overflow-hidden">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="object-cover h-full w-full"
              />
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
