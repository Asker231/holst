import {createRoot} from 'react-dom/client'
import './global.css'

const root = createRoot(document.getElementById('root')!)
root.render(<div className='main'>Hello World</div>)