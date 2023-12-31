import React from 'react';
import Hero from '@/components/Hero'
import Head from 'next/head'
import Contact from '@/components/Contact'

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta name='description' content='Anne Elvira Portfolio created by next app' />
                <link rel='icon' type='image/png' sizes='32x32' href='/icon-logo.png' />
            </Head>
            <Hero heading='Contact' message= "Submit the form below to reach out to me" />
            <Contact />
        </div>
    )
}

export default contact;