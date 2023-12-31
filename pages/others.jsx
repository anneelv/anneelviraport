import React from 'react';
import Hero from '@/components/Hero'
import Head from 'next/head'
import OthersProject from '../components/OthersProject'

const others = () => {
    return (
        <div>
            <Head>
                <title>Other Projects</title>
                <meta name='description' content='Anne Elvira Portfolio created by next app' />
                <link rel='icon' type='image/png' sizes='32x32' href='/icon-logo.png' />
            </Head>
            <Hero heading='Other Projects' message='Other projects not related to cyber security' />
            <OthersProject />
        </div>
    )
}

export default others;