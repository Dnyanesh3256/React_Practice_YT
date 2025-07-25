import './App.css'

function App({username}) {

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black mb-3'>Tailwind and Props</h1>

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://images.pexels.com/photos/29746850/pexels-photo-29746850.jpeg" alt="Card image" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Card Title</div>
        <p class="text-gray-700 text-base">
          This is a simple card component built with Tailwind CSS. You can put any content here.
        </p>

        <h3 className='text-black'>Username : {username}</h3>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
      </div>
    </div>
    </>
  )
}

export default App
