import Articles from '../articles/Articles';
import Education from '../education/Education';
import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Works from '../works/works';
import './Home.css'

function Home() {

    return (
        <div className='max-w-4xl mx-auto'>
            <section id='profile'>
                <Profile></Profile>
            </section>
            <section id='projects'>
                <Projects></Projects>
                <Skills></Skills>
            </section>
            <section id='works'>
                <Works></Works>
            </section>
            <section id='education'>
                <Education></Education>
            </section>
            <section id='articles'>
                <Articles></Articles>
            </section>
        </div>
    )
}



export default Home;