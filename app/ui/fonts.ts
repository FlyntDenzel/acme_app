//file used to keep hold of all the fonts used during the creation of the app
import { Inter, Lusitana } from 'next/font/google';

// creating a subset for the Inter font: In this case latin
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });
