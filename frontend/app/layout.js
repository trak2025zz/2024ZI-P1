import { Inter } from "next/font/google";
import "./globals.css";
import Menu from'./Menu'
import { UserProvider } from './userContext'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-[100%]"> 
      <body className="h-[100%]">
        <UserProvider>
          <Menu />
          <main>{children}</main>    
        </UserProvider>  
      </body>
    </html>
  );
}

