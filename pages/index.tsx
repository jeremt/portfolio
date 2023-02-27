import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import type {GetStaticProps} from 'next';

import {getWorld} from '../src/api/api';
import type {WorldModel} from '../src/api/WorldModel';
import {Scene} from '../src/scene/Scene';

type IndexProps = {
    world: WorldModel;
};

const NavLink = styled(Link)`
    color: #eeeeee;
`;

export default function IndexPage({world}: IndexProps) {
    return (
        <>
            <Head>
                <title>Jérémie Taboada's Resume</title>
            </Head>
            <Scene />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {world: getWorld()},
    };
};
