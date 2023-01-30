import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Container from "../components/Container"

const News = (props) => {
    const news = props.news;
    return(
        <Container>
          <div class="container text-center">
            <div class="row row-cols-sm-3">
    
            {news.map( e => (
              <div class="card px-1 pt-1" style={{width: "18rem"}}>
                <img src={e.acf.img.url} style={{height: "30vh", width: "auto"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{e.acf.title}</h5>
                  <p class="card-text">{e.acf.content}</p>
                  <p><strong>Author: {e.acf.author}</strong></p>
                  <Link href="/about" class="btn btn-info">About</Link>
                </div>
              </div>
            ))}
    
            </div>
          </div>
        </Container>
    );
  };


News.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:8080/wordpress/wp-json/wp/v2/news");
    const resJSON = await res.json();
    console.log(resJSON);
    return {
      news: resJSON,
    };
  };
  
  export default News;