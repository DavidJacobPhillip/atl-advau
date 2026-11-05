import About from '@/components/home/About';
import Board from '@/components/home/Board';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Board />
    </>
  );
}
