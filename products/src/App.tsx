import Products from "./components/Products"


function App() {

  return (
    <>
        <h1 className="mt-5 text-4xl font-extrabold font-sans w-max mx-auto bg-gradient-to-tr from-cyan-600 to-lime-700 text-transparent bg-clip-text">JYSK Jani boltja</h1>
        <div className="grid grid-cols-1 w-[80%] mx-auto md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
            <Products />
        </div>
        <footer className="text-center bg-zinc-700 py-2">
            <p className="text-gray-200">Copyright ©2024. All rights reserved.</p>
        </footer>
    </>
  )
}

export default App
