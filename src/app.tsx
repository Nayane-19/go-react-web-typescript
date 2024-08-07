import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Room } from './pages/room/room'
import { CreateRoom } from './pages/create-room/create-room'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom />
  },
  {
    path: '/room/:roomId',
    element: <Room />
  }
])

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
