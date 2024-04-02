import { useEffect, useState } from "react";

function App() {
  const [page, setpage] = useState(1);

  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data?.products);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPagehandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products?.length / 10 &&
      selectedPage !== page
    ) {
      setpage(selectedPage);
    }
  };

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products?.slice(page * 10 - 10, page * 10).map((prod, i) => {
            return (
              <span key={i} className="products__single">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {products?.length > 0 && (
        <div className="pagination">
          <span
            className={page === 1 ? "pagination__disabled" : ""}
            onClick={() => selectedPagehandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                key={i}
                onClick={() => selectedPagehandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={
              page < products?.length / 10 ? "" : "pagination__disabled"
            }
            onClick={() => selectedPagehandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
