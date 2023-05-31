import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import Logo from '/public/icons/logo.svg'
import User from '/public/icons/user.svg'
import Container from "@/components/other/Container/Container";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";


interface ILinks  {
  name: string,
  link: string,
}
const links: ILinks[] = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'О нас',
    link: '/about',
  },
]

const help = {
    name: 'Помощь',
    link: '/save',
    children: [
      {
        name: 'Услуги',
        link: '/services',
      },
      {
        name: 'Контакты',
        link: '/contacts',
      },
      {
        name: 'Льготы',
        link: '/lgots',
      },
    ]
  }

const Header = () => {
  const [active, setActive] = useState(false)
  const variants = {
    open: {
      height: '100%'
    },
    hide: {
      height: 0
    }
  }
  return (

    <header className={styles.header}>
      <Container className={styles.root}>
        <Logo viewBox="0 0 53 58" lassName={styles.logo}/>
        <nav className={styles.links}>
          {links.map((e, i) => <Link key={i} href={e.link} className={styles.link}>{e.name}</Link> )}
          <Link href={help.link}  className={styles.link}>{help.name}</Link>
          <div  className={styles.link}>Санкт-Петербург</div>
          <Link href={'tel:+7 495 967 13 01'} className={styles.phone}>+7 495 967 13 01</Link>
          <Link  href={'/me'} className={styles.me}><span>Личный кабинет</span><User viewBox="0 0 30 30" className={styles.user}/></Link>
        </nav>
        <div onClick={() => setActive(!active)} className={styles.burger}/>
        <AnimatePresence>
          {active &&
            <motion.div animate={'open'} exit={'hide'} initial={'hide'} variants={variants} className={styles.mobileMenu}>
              <nav className={styles.linksMobile}>
                {links.map((e, i) => <Link onClick={() => setActive(false)} key={i} href={e.link} className={styles.link}>{e.name}</Link> )}
                <Link onClick={() => setActive(false)} href={help.link}  className={styles.link}>{help.name}</Link>
                <div onClick={() => setActive(false)}  className={styles.link}>Санкт-Петербург</div>
                <Link onClick={() => setActive(false)} href={'tel:+7 495 967 13 01'} className={styles.phone}>+7 495 967 13 01</Link>
                <Link onClick={() => setActive(false)}  href={'/me'} className={styles.me}><span>Личный кабинет</span><User viewBox="0 0 30 30" className={styles.user}/></Link>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </Container>

    </header>
  );
};

export default Header;