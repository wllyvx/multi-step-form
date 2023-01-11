import './globals.css'
import { Ubuntu } from '@next/font/google'
import Link from 'next/link'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

const steps = (title:number, link:string)=>{
  return <li><Link href={link}>{title}</Link></li>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={ubuntu.className}>
        <main>
          <div className=''>
            <ul className="flex justify-between">
              {steps(1, "/")}
              {steps(2, "/")}
              {steps(3, "/")}
              {steps(4, "/")}
            </ul>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
