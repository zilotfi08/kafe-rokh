import Link from "next/link";
import styled from "../../../styles/navbar.module.scss"

function Navbar() {
  return (
    <div className={styled.navbar}>
      <div className={styled.right}>
        <Link href="./about" className={styled.item_active}>
          صفحه اصلی
        </Link>
        <Link href="./about" className={styled.item}>
          منو
        </Link>
        <Link href="./about" className={styled.item}>
          درباره ما
        </Link>
        <Link href="./about" className={styled.item}>
          تماس با ما
        </Link>
      </div>
      <div className={styled.logo}>

      </div>
      <div className={styled.left}>
        <input className={styled.input} placeholder="جستجو" type="text" />
      </div>
    </div>
  );
}

export default Navbar;


