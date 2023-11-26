
const Search = () => {
  return (
    <div>
      <div className="pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
        >
        <svg className="text-gray-800 h-4 w-4 fill-current" viewBox="0 0 56.966 56.966" style={{enableBackground: "new 0 0 56.966 56.966",} as React.CSSProperties} width="512" height="512"><path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
