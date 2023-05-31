import React from 'react';
import styles from './Banner.module.scss'
import Icon from '/public/icons/banner.svg'
import Container from "@/components/other/Container/Container";
import Button from "@/components/UI/Button/Button";


const Banner = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <div className={styles.text}>
          <h3 className={styles.title}>Страховая программе <span>ЗАЩИТА +</span></h3>
          <p className={styles.p}>Одна из самых удобных и выгодных страховых программ предоставляемых грожанам России и иностранным гражданам.</p>
          <Button className={styles.btn}>Купить</Button>
        </div>
        <Icon className={styles.icon} viewBox="0 0 610 440"/>
      </div>
    </Container>
  );
};

export default Banner;