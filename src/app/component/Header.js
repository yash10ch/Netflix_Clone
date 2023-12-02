import style from "@/app/style/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/component/nav"



const Header =()=>{
  return (
    
   <header className={style.main_header}>
     <div className={style.navbar_brand}>
        <Link href="/">
              <Image src="/netflix.svg" alt="my image" width={150} height={40} />

              
        </Link>
     </div>
     <Nav/>
   </header>
   
  );
};

export default Header;