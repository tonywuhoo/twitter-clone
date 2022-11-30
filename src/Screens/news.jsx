// import { useState, useEffect } from "react";
// import axios from "axios";

// function News() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       let res = await axios.get(
//         "https://newsapi.org/v2/everything?q=stocks&apiKey=695ae6cb7de647c1801f4549a8178faf"
//       );
//       console.log(res.data.articles);
//       setArticles(res.data.articles);
//     };
//     console.log(articles)
//     fetchNews();
//   }, []);

//   console.log(articles)

//   return (
    
//   <div className="News">

//       </div>
    
//   );
// }

// export default News;
