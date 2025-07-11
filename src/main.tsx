import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import { TrafficLight } from './01-useState/TrafficLigth'; */
/* import { TrafficLightWhitEffect } from './02-useEffect/TrafficLigthWithEffect'; */
import { TrafficLightWhitHook } from './02-useEffect/TrafficLigthWithHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrafficLightWhitHook />
  </StrictMode>,
)
