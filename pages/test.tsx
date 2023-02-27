import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import type {GetStaticProps} from 'next';

import {getWorld} from '../src/api/api';
import type {WorldModel} from '../src/api/WorldModel';
import {Scene} from '../src/scene/Scene';
import {MacbookWindow} from '../src/scene/macbook/MacbookWindow';

type IndexProps = {
    world: WorldModel;
};

const NavLink = styled(Link)`
    color: #eeeeee;
`;

export default function TestPage({world}: IndexProps) {
    return (
        <>
            <Head>
                <title>Test</title>
            </Head>
            <MacbookWindow />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {world: getWorld()},
    };
};
