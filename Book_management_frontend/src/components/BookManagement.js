// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 
// function BookManagement() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
// const response = await axios.get(`http://localhost:8080/apicall/getAll`);
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
 
  
//   const filterData = data.filter((book) =>
//     book.title.toLowerCase().includes(search.toLowerCase()) ||
//     // book.author.toLowerCase().includes(search.toLowerCase())||
//     // book.gener.toLowerCase().includes(search.toLowerCase()) ||
//     book.publicationYear.toString().includes(search)
//   );
 
//   return (
//     <div>
//       <h2>List Of Books</h2>

      
//       <input type="text" placeholder="Search by Title , Year" 
//       value={search} onChange={(e) => setSearch(e.target.value)} />
//       <button >Add Books</button>
 
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Genre</th>
//             <th>Publication Year</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filterData.map((d, id) => (
//             <tr key={id}>
//               <td>{d.title}</td>
//               <td>{d.author}</td>
//               <td>{d.gener}</td>
//               <td>{d.publicationYear}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//   );
// }
 
// export default BookManagement;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
function BookManagement() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState(
    {
    title: '',
    author: '',
    genre: '',
    publicationYear: ''
  });
  const [showForm, setShowForm] = useState(false); 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
const response = await axios.get(`http://localhost:8080/apicall/getAll`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
 
  const handleInputChange = (e) => {
    setNewBook({
      ...newBook,[e.target.name]: e.target.value,
    });
  };
 
  const addBook = async (e) => {
    e.preventDefault();
    try {
const response = await axios.post(`http://localhost:8080/apicall/addBook`, newBook);
      setData([...data, response.data]); 
      setNewBook({ title: '', author: '', genre: '', publicationYear: '' }); 
      setShowForm(false); 
    } catch (error) {
      console.log(error);
    }
  };
 
 
  const filterData = data.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.gener.toLowerCase().includes(search.toLowerCase()) ||
    book.publicationYear.toString().includes(search)
  );
 
  return (
    <div>
      <h2>List Of Books</h2>
      
     
      <input 
        type="text"
        placeholder="Search by Title, Author, Genre, or Year"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />
 
      
      <button className='btn' onClick={() => setShowForm(!showForm)} >
        {showForm ? "Cancel" : "Add Book"}
      </button>
 
      
      {showForm && (
        <form className="form" onSubmit={addBook} >
          <input className='inputBox' type="text" name="title" placeholder="Title"
            value={newBook.title} onChange={handleInputChange} required/>

          <input className='inputBox' type="text" name="author" placeholder="Author"
            value={newBook.author} onChange={handleInputChange} required/>

          <input className='inputBox' type="text" name="genre" placeholder="Genre"
            value={newBook.genre} onChange={handleInputChange} required/>

          <input className='inputBox' type="number" name="publicationYear" placeholder="Year"
            value={newBook.publicationYear} onChange={handleInputChange} required/>

          <button className='btn' type="submit">AddBook</button>
        </form>
      )}
 
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publication Year</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((d, id) => (
            <tr key={id}>
              <td>{d.title}</td>
              <td>{d.author}</td>
              <td>{d.gener}</td>
              <td>{d.publicationYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default BookManagement;

