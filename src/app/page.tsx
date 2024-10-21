import About from '@/components/About';
import Experience from '@/components/Experience';
import Home from '@/components/Home';

export default function Index() {
  return (
    <div className="flex flex-col gap-8">
      <Home />
      <About />
      <Experience />
    </div>
  );
}
