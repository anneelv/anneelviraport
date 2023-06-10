import React from 'react';
import Hero from '@/components/Hero'
import Head from 'next/head'

const projects = () => {
    return (
        <div>
            <Head>
                <title>Cyber Security Projects</title>
                <meta name='description' content='Anne Elvira Portfolio created by next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero heading='Cyber Security Projects' message='Projects focusing on cyber security' />
        </div>
    )
}

export default projects;