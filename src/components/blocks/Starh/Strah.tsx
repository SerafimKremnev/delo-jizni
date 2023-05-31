import React from 'react';
import Container from "@/components/other/Container/Container";
import Title from "@/components/UI/Title/Title";
import styles from './Strah.module.scss'
import Hours from '/public/icons/hours.svg'
import Butterfly from '/public/icons/butterfly.svg'
import Pay from '/public/icons/pay.svg'
import Micro from '/public/icons/micro.svg'
import Calendar from '/public/icons/calendar.svg'

const cards = [
  {
    icon: <Hours viewBox="0 0 69 69"/>,
    text: 'обращения к доктору 24/7 ',
    title: 'без ограничений ',
  },
  {
    icon: <Calendar viewBox="0 0 68 68"/>,
    text: 'обращения к врачам -специалистам',
    title: 'без ограничений ',
  },
  {
    icon: <Pay viewBox="0 0 76 74"/>,
    text: 'защита от несчастного случая + медицинский онлайн-сервис ',
    title: '24/7',
  },
  {
    icon: <Micro viewBox="0 0 69 73" />,
    text: 'лабораторные исследования',
    title: 'до 2-х раз год',
  },
  {
    icon: <Butterfly viewBox="0 0 96 70"/>,
    text: 'упрощенная система страхования ',
    title: 'до 10 мин.',
  },
]

const Strah = () => {
  return (
    <Container min={true}>
      <div className={styles.root}>
        <Title>О страховании</Title>
        <div className={styles.cards}>
          {cards.map((e, i) =>
            <div key={i} className={styles.card}>
              <div className={styles.nameCard}>{e.title}</div>
              <div className={styles.inner}>
                <div className={styles.icon}>{e.icon}</div>
                <div className={styles.text}>{e.text}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Strah;