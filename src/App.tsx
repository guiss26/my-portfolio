
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Stack from "./sections/Stack"

function App() {
  return (
    <>
      <main className="pt-10 bg-neutral-50 min-h-screen scroll-smooth bg-neutral-200/50">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  )
}

export default App
