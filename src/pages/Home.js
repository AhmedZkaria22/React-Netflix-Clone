import React from 'react'

import HomeHero from '../components/HomeHero';
import HomeHero1 from '../assets/imgs/HomeHero1.png';
import HomeHero21 from '../assets/imgs/HomeHero21.jpg';
// import HomeHero22 from './assets/imgs/HomeHero22.png';
import HomeHero3 from '../assets/imgs/HomeHero3.png';
import HomeHero4 from '../assets/imgs/HomeHero4.png';

import { Accordion } from 'react-bootstrap';
import '../style/home.css';
function Home() {
    return (
    <>
        <HomeHero heroImg={HomeHero1} heroDesc={[
        'Enjoy on your TV.',
        'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
        ]} heroVideo='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'/>
        <HomeHero heroImg={HomeHero21} heroDesc={[
        'Download your shows to watch offline.',
        'Save your favorites easily and always have something to watch.'
        ]} heroClass={'homeHeroFlexRev'}/>
        <HomeHero heroImg={HomeHero3} heroDesc={[
        'Watch everywhere.',
        'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
        ]} heroVideo='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'/>
        <HomeHero heroImg={HomeHero4} heroDesc={[
        'Create profiles for kids.',
        'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
        ]} heroClass={'homeHeroFlexRev'}/>

        <section className='Faq'>
        <h1>Frequently Asked Questions</h1>
        <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>What is Netflix?</Accordion.Header>
            <Accordion.Body>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br/>
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!          </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>How mush does Netflix cost?</Accordion.Header>
            <Accordion.Body>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I watch?</Accordion.Header>
            <Accordion.Body>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. 
            <br />
            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
            <Accordion.Header>How do I cancel?</Accordion.Header>
            <Accordion.Body>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
            <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
            <Accordion.Body>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
            <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
            <Accordion.Body>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            <br />
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>        
        </section>
    </>
    )
}

export default Home
