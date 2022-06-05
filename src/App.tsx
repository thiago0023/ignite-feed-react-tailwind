import Header from './components/Header'
import PostProvider from './hooks/usePosts'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <PostProvider>
      <div className='font-roboto text-gray-300 h-max w-screen bg-gray-700 antialiased pb-4'>
        <Header />
        <MainLayout />
      </div>
    </PostProvider>
  )
}

export default App
