import React from 'react';
import ProjectItem from './ProjectItem';
import chessgameImg from '../assets/ChessGame.jpeg';

const Projects = () => {
    return (
        <div id='projects' className='maw-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum eleifend ex, eu pharetra leo
                mollis et. Maecenas sed pretium sem. Etiam et ligula in urna accumsan convallis. Ut tempus vehicula
                mauris a dapibus. Vestibulum at blandit nisl. Vivamus pretium libero sit amet viverra egestas. Ut
                tincidunt felis quis lacus aliquet pharetra. Sed pharetra scelerisque diam sed dignissim. Etiam vehicula
                rhoncus est, at varius sem laoreet vitae. Suspendisse potenti.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={chessgameImg} title='Chess Game App' framework='Qt C++'/>
                <ProjectItem img={chessgameImg} title='Chess Game App' framework='Qt C++'/>
                <ProjectItem img={chessgameImg} title='Chess Game App' framework='Qt C++'/>
                <ProjectItem img={chessgameImg} title='Chess Game App' framework='Qt C++'/>
            </div>
        </div>
    );
};

export default Projects;