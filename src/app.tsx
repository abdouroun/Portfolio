import { Header } from './components/header';
import { Hero } from './components/hero';
import { SelectedWork } from './components/selected_work';
import { Experience } from './components/experience';
import { Expertise } from './components/expertise';
import { Learning } from './components/learning';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { useReveal } from './hooks/use_reveal';

export default function App() {
    useReveal();
    return (
        <>
            <Header />
            <main id="main-content">
                <Hero />
                <div className="wrap">
                    <SelectedWork />
                    <Experience />
                    <Expertise />
                    <Learning />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </>
    );
}
