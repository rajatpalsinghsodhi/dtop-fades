import { Navbar, Hero, Philosophy, Services, Reviews, Contact, Footer } from './components/Site';

export default function App() {
  return (
    <main className="bg-editorial-bg text-editorial-text selection:bg-editorial-accent selection:text-editorial-bg min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
