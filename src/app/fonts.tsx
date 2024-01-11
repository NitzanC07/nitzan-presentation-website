import { Inter, Rubik, Varela_Round } from "next/font/google"

export const varelaRound = Varela_Round({
    subsets: ['hebrew'],
    display: 'swap',
    weight: "400"
  })
  
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })
  
export const rubik = Rubik({
    subsets: ['hebrew', 'latin'],
    display: 'swap',
    weight: '400',
  })