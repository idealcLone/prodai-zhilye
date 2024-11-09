import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Comparison from '@/components/Comparison';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import Advantages from '@/components/Advantages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className={'relative min-h-screen w-screen'}>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
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
