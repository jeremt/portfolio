import styled from '@emotion/styled';
import {Div} from '../../ui/Div';
import {FC, useCallback, useMemo, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {keyframes} from '@emotion/react';

const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Background = styled(Div)`
    animation: ${appear} 0.3s;
    width: 334px;
    height: 216px;
    background-image: url('/assets/images/background.png');
    background-size: cover;
`;

const WindowWrapper = styled(Div)`
    width: 280px;
    height: 150px;
    position: absolute;
    top: 30px;
    left: 30px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    .toolbar {
        height: 12px;
        background-color: #3f393e;
        border-radius: 5px 5px 0 0;
        display: flex;
        flex-wrap: no-wrap;
        flex-direction: row;
        justify-content: left;
    }

    .button {
        height: 4px;
        width: 4px;
        border-radius: 100%;
        margin: 4px 2px;
    }
    .button.red {
        margin-left: 4px;
        background-color: #ff5b52;
        border: 1px solid #ff4339;
    }
    .button.yellow {
        background-color: #ffc207;
        border: 1px solid #edb200;
    }
    .button.green {
        background-color: #16d037;
        border: 1px solid #14b931;
    }

    .content {
        background-color: #2d252d;
        backdrop-filter: blur(10px);
        flex-grow: 1;
        border-radius: 0 0 6px 6px;
        color: #eeeeee;
        font-size: 0.4rem;
        font-family: Inter;
        a {
            color: #5a9af8;
        }
    }
    .text {
        padding: 10px;
    }
`;

const LeftPanel = styled(Div)`
    border-right: 1px solid #241e24;
    .preview {
        margin-top: 5px;
        border-radius: 5px;
        width: 150px;
        height: 90px;
    }
`;

const Icon = styled.img<{selected: boolean}>`
    object-fit: cover;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: ${props => (!props.selected ? 'pointer' : undefined)};
    border: ${props => (props.selected ? `1px solid #5a9af8` : `1px solid transparent`)};
    transition: 0.3s all;
    pointer-events: all;
    &:hover {
        border: 1px solid #5a9af8;
    }
`;

interface ProjectModel {
    url: string;
    name: string;
    image: string;
    description: string;
}

export const MacbookScreen: FC = () => {
    const projects = useMemo<ProjectModel[]>(
        () => [
            {
                url: 'https://js-journey.vercel.app/',
                name: 'JS Journey',
                image: '/assets/images/project-jsjourney.png',
                description: `JS Journey is a side project I’m making on my free time.

        This is a website to learn programming via Javascript from scratch. The idea is to make a fun and progressive way to learn various concepts and best practices!`,
            },
            {
                url: 'https://voltapp.tech/',
                name: 'Voltapp',
                image: '/assets/images/project-voltapp.png',
                description: `Voltapp is a tool that allows people to create apps and websites without coding.`,
            },
        ],
        [],
    );
    const [selectedProject, setSelectedProject] = useState(0);
    const selectProject = useCallback((index: number) => {
        setSelectedProject(index);
    }, []);
    return (
        <Background>
            <WindowWrapper>
                <div className="toolbar">
                    <div className="button red"></div>
                    <div className="button yellow"></div>
                    <div className="button green"></div>
                </div>
                <Div className="content">
                    <LeftPanel width="60%" direction="y">
                        <Div width="100%" align="center" distribute="center">
                            <img className="preview" src={projects[selectedProject].image} alt={projects[selectedProject].name} />
                        </Div>
                        <Div padding="5px 10px" align="center" spacing="5px">
                            {projects.map((project, i) => (
                                <Icon
                                    key={project.name}
                                    selected={selectedProject === i}
                                    onClick={e => {
                                        e.stopPropagation();
                                        selectProject(i);
                                    }}
                                    src={project.image}
                                    alt={project.name}
                                    width={512}
                                    height={288}
                                />
                            ))}
                        </Div>
                    </LeftPanel>
                    <Div width="40%" direction="y" padding="5px" spacing="5px">
                        <Div>
                            <Div style={{fontSize: '0.5rem'}}>{projects[selectedProject].name}</Div>
                        </Div>
                        <Div width="100%" style={{color: '#aaaaaa'}}>
                            {projects[selectedProject].description}
                        </Div>
                        <Link href={projects[selectedProject].url} target="_blank">
                            Open project
                        </Link>
                    </Div>
                </Div>
            </WindowWrapper>
        </Background>
    );
};
