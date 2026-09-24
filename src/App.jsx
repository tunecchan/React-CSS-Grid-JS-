import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const siteTitle = 'Мой React-сайт'
  const userName = 'Студент'
 
  return (
    <Layout siteTitle={siteTitle}>
      <Header title={siteTitle} userName={userName} />
      <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />
      <MainContent>
        <h1>Добро пожаловать!</h1>
        <p>Это изменённый сайт с изменённым порядком основного окнтента и списком.</p>
        <p>Ниже представлен список изменённых пунктов:</p>
        <ul>
          <li>Через стили в css изменены фиксированные ширины столбцов <code>200px 1fr 200px</code>.</li>
          <li>В файле <code>App.jsx </code> добавлен новый контент.</li>
        </ul>
      </MainContent>
      <Footer year={new Date().getFullYear()} />
    </Layout>  )
} 
export default App
