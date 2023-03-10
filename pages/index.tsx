import Head from 'next/head';
import MainCarousel from '../components/shared/carousel/Carousel';
import Banner from '../components/shared/banner/Banner';
import SectionCart from '../components/shared/sectionCart';
import SectionCart2 from '@/components/shared/sectionCart2';
import { GetStaticProps } from 'next';
import SectionCart3 from '@/components/shared/sectionCart3';
import 'aos/dist/aos.css';

interface HomeType {
  dataCategories: string[];
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Binh Ho Service</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="section layout">
        <MainCarousel />
      </section>

      <section className="section layout">
        <Banner />
      </section>

      <section className="section layout">
        <SectionCart />
      </section>

      <section className="section layout">
        <SectionCart2 />
      </section>

      <section className="section layout">
        <SectionCart3 />
      </section>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const urls = ['https://dummyjson.com/products/categories'];
//     const [dataCategories] = await Promise.all(
//       urls.map(url => fetch(url).then(res => res.json()))
//     );

//     return {
//       props: {
//         dataCategories,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: {},
//       },
//     };
//   }
// };
