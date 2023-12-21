import Hero from './components/Hero';
import Content from './components/Content';
import Newmap from './components/Newmap';
import Head from '@/node_modules/next/head';
import Newtext from './components/Newtext';
import Footer from './components/Footer';
import Newcon from './components/Newcon';





export default function Home() {
  return (
<div class="container">
  <Head>
    <link rel="icon" href="/favicon.ico"/>
    </Head>
<main className="main-head">
 <Hero heading="Automate Your Finance Function" message="WITHOUT Reworking Your ERP"/>
 <Content/>
 <Newmap/>
 <Newcon/>
 <Newtext/>
 <Footer/>
   </main>
</div>

  )
}
