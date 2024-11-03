import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Comparison from '@/components/Comparison';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={'relative min-h-screen'}>
      <Header />
      <Hero />
      <About />
      <Comparison />
      <Feedback />
      <Footer />
    </main>
  );
}
