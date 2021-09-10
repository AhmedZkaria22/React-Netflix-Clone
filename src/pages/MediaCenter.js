import React, { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/store';

import '../style/mediaCenter.css'
import { Dropdown, DropdownButton, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MediaCenter({ moviesData, fetchMovies }) {

    useEffect(() => {
        fetchMovies();
    }, []);

    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const handelDateFormat = String => {        
        const rtnMon = months.filter(  (month, i) => {
                return i === (parseInt( String.substr(5, 2) ) - 1)
              }),
              rtnDay = parseInt( String.substr(8, 2) ),
              rtnYear = parseInt( String.substr(0, 4) );
        return `${rtnMon} ${rtnDay}, ${rtnYear}`;
    }

    const categoriesName = ['Action', 'Action & Adventure', 'Adventure', 'Animation', 'Comedy', 'Crime', 
        'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 
        'Science Fiction', 'Sci-Fi & Fantasy', 'Soap', 'TV Movie', 'Thriller', 'War', 'War & Politics', 
        'Western', 'Kids', 'News', 'Reality', 'Talk'] ;
    const categoriesIds = [28, 10759, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648,
        10749, 878, 10765, 10766, 10770, 53, 10752, 10768, 37, 10762, 10763, 10764, 10767];

    const [fnmonth, setFnMonth] = useState('Month');

    const [fnmoviesData, setFnmoviesData] = useState([]);

    const handelMonthsList = (Number) => {
        for( let i of moviesData ){
            if( parseInt(i.release_date.substr(5, 2)) === (Number+1) ){
                return true;
            }   
        }
        return false;
    }

    const [monthListener, setMonthListener] = useState(0);
    const handelMoviesData = (Number) => {
        setMonthListener(Number+1);
        setFnmoviesData([ ...moviesData.filter( (movie, i) => {
            return parseInt(movie.release_date.substr(5, 2)) === (Number+1) ;
        }) ])
    };

    const handelMovieGenreIdsListener = () => {
        for( let i of moviesData ){
            if( i.genre_ids.indexOf(Number) !== -1 ){ return true; }
        }
        return false;
    }

    const handelMoviesFilter = (Number) => {
        // const [movieGenreIdsListener, setMovieGenreIdsListener] = useState(false);
        if( handelMovieGenreIdsListener ){
        if( monthListener > 0 ){
            setFnmoviesData([ ...moviesData.filter( movie => {
                return (movie.genre_ids.indexOf(Number) !== -1  && parseInt(movie.release_date.substr(5, 2)) === monthListener);
            }) ]);
        }else{
            setFnmoviesData([ ...moviesData.filter( movie => {
                return movie.genre_ids.indexOf(Number) !== -1 ;
            }) ])    
        }
        }else{ setFnmoviesData([]); }
    }

    const handelMoviesFilterColors = (e, color1, color2, step) => {
        // const parent = e.target.parentElement.parentElement;
        let parent = e.target;
        if(step === false){
            parent = e.target.parentElement;
            for(let i = 0; i<parent.children.length; i++){
                if( parent.children[i] === e.target ){
                    e.target.style.backgroundColor = color1;
                }else{ parent.children[i].style.backgroundColor = color2; }
            }    
        }else{ parent = e.target.parentElement.parentElement; 
            for(let i = 0; i<parent.children.length; i++){
                if( parent.children[i] === e.target.parentElement ){
                    e.target.style.backgroundColor = color1;
                }else{ parent.children[i].children[0].style.backgroundColor = color2; }
            }    
        }
    }

    useMemo(() => {
        setFnmoviesData([ ...moviesData ]);
    }, [moviesData]);

    return (
        <main id='MediaCenter'>
            <div className='mediaMonthFilter'>
                <span>I'm interested in covering titles releasing in</span>
                <DropdownButton id="mediaMonthFilter__dropDown" title={fnmonth}>{
                    months.map( (month, index) => ( handelMonthsList(index) ) 
                        ? <Dropdown.Item key={index} className='mediaMonthFilter__dropDown__item' onClick={ (e) => {
                            setFnMonth(month); handelMoviesData(index);
                            // console.log(monthListener , fnmoviesData);
                            handelMoviesFilterColors(e, '#393939','transparent', false);
                        } }> { month } </Dropdown.Item>
                        : null
                    )
                }</DropdownButton>
            </div>

            <div className='mediaCategos'>{
                categoriesName.map( (categ, index) => { return(
                    <div className='mediaCategos__item' key={index} onClick={(e) => { 
                        handelMoviesFilter(categoriesIds[index]); console.log(monthListener , fnmoviesData);
                        handelMoviesFilterColors(e, '#3952b1','#4E4E4E', true);
                    }}>
                        <span disabled> {categ} </span>
                    </div>
                )})
            }</div>            
            
            {
                ( fnmoviesData.length > 0 ) 
                    ? ( <div className='mediaCards'>{   
                        fnmoviesData.map( (movie,i) => 
                            <Figure key={i} className='mediaCards__item' as={Link} to={`/ReactNetflixMediaView/${movie.title.split(" ").join("_")}*${movie.genre_ids.join('_')}`}>
                                <img src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`img${i}`} className='img-fluid'/>
                                <p> {handelDateFormat(movie.release_date)} </p>
                                {/* <p> { movie.genre_ids.join(', ') } </p> */}
                            </Figure>
                        )
                    }</div> )
                    : (
                        <div className='mediaEmpty'>
                            <p> No media here yet, try an other categorie </p>
                        </div>
                    )
            }
        </main>
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
)( MediaCenter )