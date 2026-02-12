import { Route, Routes } from 'react-router-dom'
import Content from './layouts/Content/Content'
import Home from './pages/Home'
import JoinMeeting from './pages/JoinMeeting'
import HostMeeting from './pages/HostMeeting'
import MyMeeting from './pages/MyMeeting'
import Poll from './pages/Poll'

const App = () => {
  return (
    <>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinmeeting" element={<JoinMeeting />} />
          <Route path="/hostmeeting" element={<HostMeeting />} />
          <Route path="/mymeeting" element={<MyMeeting />} />
          <Route path="/poll" element={<Poll />} />
        </Routes>
      </Content>
    </>
  )
}

export default App