import React,{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
const FetchAxios = () => {
    const[news,setNews]=useState([]);
  


    
    useEffect(() => {
        const loadNews = async () => {
          const response = await axios.get(
            "https://newsapi.org/v2/everything?q=apple&from=2022-08-17&to=2022-08-17&sortBy=popularity&apiKey=6aceaef09f4447dea6d1fa01f40d784d"
          );
          setNews(response.data.articles);
        };
        loadNews();
      }, []);


     

  return (
    <div className='my-3'>
     
        <h1 className='text-center' style={{color:"black"}}>News App</h1>
        <div className="container d-flex justify-content-between">
         <Link className="btn btn-sm btn-dark" to="/Interval">
          &larr;Previous
                </Link>
                <Link className="btn btn-sm btn-dark" to="/TempApp">
                Next &rarr;
                </Link>
        </div>
    <div className='row'>
        {news&&news.map(curel=>(
            <>
          <div className="card col-sm-4 md-4" style={{width: "18rem"}}>
            <li><img src={curel.urlToImage} className="card-img-top" alt=''/></li>
            <div className='card-body'>
            <h5 className="card-title" key={curel.id} >{curel.title?curel.title.slice(0,45):""}</h5>
            <a href={curel.url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
            <p  className="card-text">{curel.description?curel.description.slice(0,88):""}</p></div>
            </div>
            </>
        ))}
         
    </div></div>
  )
}

export default FetchAxios
