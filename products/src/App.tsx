import Products from "./components/Products"


function App() {

  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
        <h1 className="mt-5 text-4xl font-extrabold font-sans w-max mx-auto bg-gradient-to-tr from-cyan-600 to-lime-700 text-transparent bg-clip-text">JYSK Jani boltja</h1>
        <section>
            <Products />
        </section>
        <footer className="text-center bg-zinc-700 py-2">
            <p className="text-gray-200">Copyright ©2024. All rights reserved.</p>
        </footer>
    </main>
  )
}

export default App
