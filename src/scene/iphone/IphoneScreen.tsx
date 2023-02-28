import styled from '@emotion/styled';
import Link from 'next/link';
import {useMemo} from 'react';
import {Div} from '../../ui/Div';
import {keyframes} from '@emotion/react';

const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Content = styled(Div)`
    animation: ${appear} 0.3s;
    width: 100px;
    height: 160px;
    flex-wrap: wrap;
`;

const AppLink = styled(Link)`
    text-decoration: none;
    .icon {
        width: 32px;
        height: 32px;
    }
    .name {
        color: white;
        font-size: 0.5rem;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
`;

interface AppModel {
    name: string;
    icon: string;
    url: string;
}

export const IphoneScreen = () => {
    const apps = useMemo<AppModel[]>(
        () => [
            {name: 'Github', url: 'https://github.com/jeremt', icon: '/assets/images/app-github.png'},
            {name: 'Instagram', url: 'https://instagram.com/jeremtab', icon: '/assets/images/app-instagram.png'},
            {name: 'Linkedin', url: 'https://www.linkedin.com/in/jeremie-taboada-16495959/', icon: '/assets/images/app-linkedin.png'},
            {name: 'Resume', url: '/assets/images/resume.pdf', icon: '/assets/images/app-resume.png'},
            {name: 'Email', url: 'mailto:taboada.jeremie@gmail.com', icon: '/assets/images/app-email.png'},
        ],
        [],
    );
    return (
        <Content align="center" distribute="start">
            {apps.map(app => (
                <AppLink key={app.name} href={app.url} target="_blank">
                    <Div align="center" direction="y" width="50px" height="40px">
                        <img className="icon" src={app.icon} alt={app.name} />
                        <Div className="name">{app.name}</Div>
                    </Div>
                </AppLink>
            ))}
        </Content>
    );
};
