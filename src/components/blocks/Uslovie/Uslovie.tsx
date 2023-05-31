import React from 'react';
import Container from "@/components/other/Container/Container";
import Title from "@/components/UI/Title/Title";
import styles from './Uslovie.module.scss'
import Doctors from '/public/icons/doctors.svg'
import Runner from '/public/icons/runner.svg'
import Star from '/public/icons/star1.svg'
import {LazyImage} from "@/components/elements/LazyImage/LazyImage";

const Uslovie = () => {
  return (
    <Container min>
      <div className={styles.root}>
        <Title>Условия которые мы предоставим Вам</Title>
        <div className={styles.main}>
          <div className={styles.card}>
            <Doctors className={styles.doctors} viewBox="0 0 492 492"/>
            <div className={styles.text}>
              <div className={styles.title}>20+</div>
              <div className={styles.text}>Высококвалифицированных врачей к которым вы можете обращаться 24/7</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.text}>
              <div className={styles.starTitle}><Star viewBox="0 0 74 72" classNmae={styles.star}/><div className={styles.titleSvg}>BestDoctor</div></div>
              <div className={styles.text}>Доступ в один из лучших медицинских сервисов в России</div>
            </div>
            <div className={styles.imgWrapper}>
              <LazyImage fill src={'/images/phone.png'} alt={'Телефон'}/>
            </div>
          </div>
          <div className={styles.card}>
            <Runner className={styles.runner} viewBox="0 0 574 574"/>
            <div className={styles.text}>
              <div className={styles.title}>600 000₽</div>
              <div className={styles.text}>Сумма страховой защиты от нещастного случая</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Uslovie;