import "./quotes.css";

export function Quotes() {
  const mainQuotes = [
    {
      quote:
        "NOBODY CARES HOW MUCH YOU KNOW, UNTIL THEY KNOW HOW MUCH YOU CARE",
      author: "Theodore Roosevelt",
    },
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
    {
      quote: "IT TAKES A VILLAGE TO RAISE A CHILD",
      author: "African Proverb",
    },
    {
      quote: "NOBODY IS AN ISLAND",
      author: "Proverb",
    },
  ];
  return (
    <div className="quotes-list">
      <section className="quotes-wrapper">
        {mainQuotes.map((eachQuote, index) => {
          return (
            <aside className="quotes-container" id={`quote${index}`}>
              <h5>{eachQuote.quote}</h5>
              <h6>- {eachQuote.author}</h6>
            </aside>
          );
        })}
      </section>
    </div>
  );
}
