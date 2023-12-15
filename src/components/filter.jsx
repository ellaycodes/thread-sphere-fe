export const Filter = ({setSortBy, order, setOrder}) => {

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    switch (sortOption) {
      case "Date":
        setSortBy("created_at");
        break;
      case "Comment Count":
        setSortBy("comment_count");
        break;
      case "Votes":
        setSortBy("votes");
        break;
      default:
        setSortBy("created_at");
    }
  };

  const toggleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  return (
    <div className="filter_section">
      <select name="filter" id="filter" onChange={handleSortChange}>
        <option value="Date">Date</option>
        <option value="Comment Count">Comment Count</option>
        <option value="Votes">Votes</option>
      </select>
      <button onClick={toggleOrder}>{order === "asc" ? "⬆" : "⬇"}</button>
    </div>
  );
};
