import Head from 'next/head'
import { Signika_Negative } from 'next/font/google' //seach type of font in font.google.com
import Hero from '@/components/Hero'
import HomeSlider from '@/components/HomeSlider'
import {HomeSliderData} from '@/components/HomeSliderData'
import HomeOtherContent from '@/components/HomeOtherContent'

// this is to define the type of font to be used through out the website
const signika = Signika_Negative({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anne Elvira Portfolio</title>
        <meta name='description' content='Anne Elvira Portfolio created by next app' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icon-logo.png' />
      </Head>
      {/* Message here is actually passing a json data */}
      <Hero heading= 'Anne Elvira Portfolio' message = 'List of projects that interest me' />
      <HomeSlider slides={HomeSliderData} />
      <HomeOtherContent />
    </div>

  )
}
