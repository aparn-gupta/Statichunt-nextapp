// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


















/////////////////////////////////////////////////////







// app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';

export const generateViewport = () => ({
  viewport: 'width=device-width, initial-scale=1',
});

export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  // other metadata configurations
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
     
     
      </head>
      <body>
        {children}
        
      </body>
    </html>
  );
};

export default RootLayout;


/////////////////////////////////////////////////////

// import './globals.css'
// import { ReactNode } from 'react'

// export const metadata = {
//   viewport: 'width=device-width, initial-scale=1',
// }

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
        
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
       


//       </head>
//       <body>
//         {children}
//       </body>
//     </html>
//   )
// }
