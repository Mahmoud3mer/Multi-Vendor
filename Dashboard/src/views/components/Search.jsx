
const Search = ({ setPerPage, searchValue, setSearchValue }) => {
    return (
        <div className="flex justify-between">
            <select onChange={(e) => setPerPage(parseInt(e.target.value))} name="" id="" className="bg-[#6a5fdf] outline-none border border-[#5c5a5a] rounded-md py-2 px-2 text-[#d0d2d6] text-sm cursor-pointer">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type='text' placeholder='Search' className='bg-transparent outline-none border border-[#5c5a5a] rounded-md focus:border-indigo-500 overflow-hidden text-sm py-2 px-2' />
        </div>
    )
}


export default Search;