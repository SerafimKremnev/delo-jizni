import React from 'react';
import styles from './Footer.module.scss'
import Container from "@/components/other/Container/Container";
import Link from "next/link";
import Vk from '/public/icons/vk.svg'
import Tg from '/public/icons/tg.svg'
import Fc from '/public/icons/fc.svg'
import Inst from '/public/icons/inst.svg'
import Button from "@/components/UI/Button/Button";

const links = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'О нас',
    link: '/about',
  },
  {
    name: 'Новости',
    link: '/news',
  },
  {
    name: 'Спецпредложения',
    link: '/spec',
  },
  {
    name: 'Бизнес предлодения',
    link: '/buisness',
  },
  {
    name: 'Твое будущее',
    link: '/future',
  },
  {
    name: 'Защита себя и близких',
    link: '/defence',
  },
  {
    name: 'Защита сотрудников',
    link: '/defence-people',
  },
]

const linksTwo = [
  {
    name: 'Страховая документация',
    link: '/docs',
  },
  {
    name: 'Финансовые показатели',
    link: '/finanse',
  },
  {
    name: 'Контакты',
    link: '/contacts',
  },
  {
    name: 'Карта сайта',
    link: '/map-site',
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container className={styles.root}>
          <div className={styles.linksRoot}>
            <div className={styles.links}>
              {links.map((e, i) => <div key={i}><Link className={styles.link}  href={e.link}>{e.name}</Link></div>)}
            </div>
            <div className={styles.linksTwo}>
              {linksTwo.map((e, i) => <div key={i}><Link className={styles.link}  href={e.link}>{e.name}</Link></div>)}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.addressWrapper}>
              <div className={styles.address}>
                {`125252, г. Москва,
                ул. Зорге, д. 22 А, офис 811`}
              </div>
              <div className={styles.time} dangerouslySetInnerHTML={{__html: 'График работы главного офиса<br/>\n' +
                  '                125252, г. Москва,<br/>\n' +
                  '                ул. Зорге, д. 22 А, офис 811<br/>\n' +
                  '                Пн. - Чт. с 9:00 до 18:00<br/>\n' +
                  '                Пт.  с 9:00 до 16:45<br/>\n' +
                  '                Сб-Вс выходной<br/>'}}>

              </div>
              <Button className={styles.btn}>
                Как добраться
              </Button>
            </div>
            <div className={styles.contacts}>
              <div className={styles.addressPost}>Адрес для почтовых отправлений: 125252, г. Москва, а/я 28</div>
              <Link className={styles.phone} href={'tel:+7 495 967 13 01'}>тел.: +7 495 967 13 01 </Link>
              <Link className={styles.mail} href={'tel:+7 495 967 13 01'}>Email для связи с нами <Link href={'mailto:info@prolife.ru'}>info@prolife.ru</Link></Link>
              <div className={styles.icons}>
                <Link href={'/'}><Vk className={styles.icon} viewBox="0 0 40 40"/></Link>
                <Link href={'/'}><Tg className={styles.icon} viewBox="0 0 40 40"/></Link>
                <Link href={'/'}><Fc className={styles.icon} viewBox="0 0 40 40"/></Link>
                <Link href={'/'}><Inst className={styles.icon} viewBox="0 0 40 40"/></Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container>
          {`© 1998 – 2021 ООО СК "ДЕЛО ЖИЗНИ". Все права защищены. Полное или частичное копирование любых материалов сайта запрещено. ООО СК «ДЕЛО ЖИЗНИ» осуществляет свою деятельность на основании лицензий ЦБ РФ:СЖ № 3870 от 24.03.2017СЛ № 3870 от 24.03.2017 Органом, осуществляющим полномочия по контролю и надзору за ООО СК «ДЕЛО ЖИЗНИ» является Банк России. Адрес официального сайта Банк России - www.cbr.ru.`}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;