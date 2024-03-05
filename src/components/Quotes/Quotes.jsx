export function Quotes() {
  const mainQuotes = [
    {
      quote: "IT TAKES A VILLAGE TO RAISE A CHILD",
      author: "African Proverb",
    },
    {
      quote: "NOBODY IS AN ISLAND",
      author: "Proverb",
    },
    {
      quote:
        "NOBODY CARES HOW MUCH YOU KNOW, UNTIL THEY KNOW HOW MUCH YOU CARE",
      author: "Theodore Roosevelt",
    },
  ];
  return (
    <div className="quotes-list">
      <section className="quotes-wrapper">
        {mainQuotes.map((eachQuote) => {
          return (
            <aside>
              <h5>{eachQuote.quote}</h5>
              <h6>{eachQuote.author}</h6>
            </aside>
          );
        })}
      </section>
    </div>
  );
}
