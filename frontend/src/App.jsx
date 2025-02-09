function App() {

  return (
    <>
      <header className="px-6 py-6 text-white font-bold">
        <nav>Scraper+</nav>
      </header>

      <div className="flex w-screen items-center flex-col py-40">
        <label for="inputname" class="block text-white font-semibold text-sm"
        >Youtube URL</label>
        <div class="mt-2">
          <input
            type="text"
            name="inputname"
            class="block w-130 rounded-md text-white py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-white"
          />
        </div>
        <label class="pt-1 w-130 block text-white font-thin text-sm">Give your youtube URL to know how much positive the youtube video is by comments</label>
      </div>
    </>
  )
}

export default App
