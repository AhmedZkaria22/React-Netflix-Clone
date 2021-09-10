import React, { useEffect, useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/store';
import '../style/mediaView.css';

function MediaView({ moviesData, fetchMovies }) {

    const trgStr = window.location.href.substring( window.location.href.lastIndexOf("/")+1 , window.location.href.lastIndexOf("*") ).split("_").join(" ");
    
    const [fnmoviesData, setFnmoviesData] = useState([
        ...moviesData.filter( (movie, i) => {
            return movie.title ===  trgStr;                
        })
    ]);

    const categoriesName = ['Action', 'Action & Adventure', 'Adventure', 'Animation', 'Comedy', 'Crime', 
        'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 
        'Science Fiction', 'Sci-Fi & Fantasy', 'Soap', 'TV Movie', 'Thriller', 'War', 'War & Politics', 
        'Western', 'Kids', 'News', 'Reality', 'Talk'] ;
    const categoriesIds = [28, 10759, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648,
        10749, 878, 10765, 10766, 10770, 53, 10752, 10768, 37, 10762, 10763, 10764, 10767];

    const [genreVals, setGenreVals] = useState([]);
    
    const genreIds = [ ...window.location.href.substring( window.location.href.indexOf("*")+1 , window.location.href.length ).split("_") ];

    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const handelDateFormat = String => {        
        const rtnMon = months.filter(  (month, i) => {
                return i === (parseInt( String.substr(5, 2) ) - 1)
              }),
              rtnDay = parseInt( String.substr(8, 2) ),
              rtnYear = parseInt( String.substr(0, 4) );
        return `${rtnDay} ${rtnMon}, ${rtnYear}`;
    }

    useEffect(() => {        
        fetchMovies();    
        // if( document.querySelector('.coverCol') !== null ){
        //     console.log( document.querySelector('.coverCol') );
        // }
        // setCounter(1);
        // window.addEventListener('mousemove', () => {            
        //     console.log( counter );
        //     ( document.querySelector('.coverCol') !== null && counter === 1 ) && console.log( document.querySelector('.coverCol') );
        // });

        // window.onload( () => {
        /*window.addEventListener('load', () => {
            if( document.querySelector('.coverCol') !== null ){
                // console.log( document.querySelector('.coverCol::before') );
                const ele = document.querySelector('.coverCol');
                console.log( window.getComputedStyle( ele, ':before' ) );
            }
        } );*/
    }, []);


    useMemo(() => {
        setFnmoviesData([
            ...moviesData.filter( (movie, i) => {
                return movie.title ===  trgStr;                
            })
        ]);        
        // if( document.querySelector('.coverCol') !== null ){
        //     console.log( document.querySelector('.coverCol') );
        // }
    }, [moviesData]);    

    
    return (
        <>
        <main id='MediaView'>
          <Container>
              <Row>
                  <Col xl='7' lg='7'  md='10' sm='10' xs='9' className='MediaView__details'>
                      { (fnmoviesData.length > 0) &&
                          <>
                            <p> {`${fnmoviesData[0].title} Season releasing in Egypt on ${handelDateFormat(fnmoviesData[0].release_date)} at 9:00 AM GMT+2`} </p>
                          </>
                      }
                      <div className='MediaView__details__div'>
                          <span> Logline </span>
                          <p> 
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </p>
                          <span> Synopsis </span>
                          <p> 
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <div id='spanParent'>
                              { genreIds.map( (genreId, index) => { return(
                                    <span key={index}>{ categoriesName[categoriesIds.indexOf(parseInt(genreIds[index]))] }</span>
                                ) })
                              }                              
                          </div>
                      </div>
                  </Col>
                  {
                    (fnmoviesData.length > 0) &&
                    <Col xl='5' lg='5'  md='7' sm='7' xs='7' className='MediaView__cover' style={{ backgroundImage: 'url('+`http://image.tmdb.org/t/p/w500${fnmoviesData[0].backdrop_path}`+')', }}></Col>
                  }
              </Row>
          </Container>  
        </main>
        </>
    )
}

const mapStateToProps = state => {
    return{ moviesData: state.movies }
}

const mapDispatchToProps = dispatch => {
    return{ fetchMovies: () => dispatch( fetchMovies() ) }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps 
)( MediaView )
// export default MediaView
