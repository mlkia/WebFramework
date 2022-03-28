// import './App.css'
import './App.css'
import Counter from './components/Counter'
import DarkMode from './components/DarkMode'
import ShowHide from './components/ShowHide'


const App = () => (
	<div>
		<h1> React Apps </h1>
		<ShowHide />
		{/* <Counter initial={10} />
		<Counter initial={20} />
		<Counter initial={30} />
		<Counter initial={40} /> */}
	</div>
)





// function App() {
//   const [count, setCount] = useState(10)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello! This is my first React App</h1>
//       </header>
//       <main className='App-main'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button onClick={() => setCount(count +1)}>
//             increase one
//           </button>
//           <p>count is = {count}</p>
//           <p>
//             <button onClick={() => setCount(count -1)}>
//               decrease one
//             </button>
//           </p>
//         </p>
//         <DarkMode />
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//         </main>
//     </div>
//   )
// }

export default App

