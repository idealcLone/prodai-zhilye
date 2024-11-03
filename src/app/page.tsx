import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Comparison from '@/components/Comparison';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import Advantages from '@/components/Advantages';

export default function Home() {
  return (
    <main className={'relative min-h-screen w-screen'}>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Comparison />
      <Feedback />
      <Footer />
    </main>
  );
}
