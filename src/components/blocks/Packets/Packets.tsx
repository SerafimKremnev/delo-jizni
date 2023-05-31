import React from 'react';
import styles from './Packets.module.scss'
import Container from "@/components/other/Container/Container";
import Title from "@/components/UI/Title/Title";
import Line from '/public/icons/line.svg'
import Flag from '/public/icons/flag.svg'
import Button from "@/components/UI/Button/Button";
import cn from "classnames";

interface packets {
  title: string
  children:  boolean[] | string[]
  price?: string
}

const packets: packets[] = [
  {
    title: 'Что мы предлагаем:',
    children: [
      'круглосуточный колл-центр по консультациям терапевта или педиатра',
      'консультация терапевта или педиатра по телефону или по видеосвязи',
      'предварительная запись к выбранному узкому специалисту по телефону или через личный кабинет пациента',
      'консультация узкого специалиста по видеосвязи',
      'выбор лаборатории, запись на прием в лабораторию',
      'комплексный отчет о состоянии здоровья пациента от врача после получения результатов анализов от пациента',
      'никаких чат-ботов',
      'на связи 24/7 только высококвалифицированные врачи',
      'удобное приложение с простым интерфейсом BestDoctor',
      'общие (клинические) анализы',
    ]
  },
  {
    title: 'Защита <br/>виртуальная клиника',
    price: '10 500 руб.',
    children: [true, true, true, true, true, true, true, true, false, false,]
  },
  {
    title: 'Защита+ <br/>виртуальная клиника, <br/>лабораторные исследования ',
    price: 'Супер цена 7 750 руб',
    children: [true, true, true, true, true, true, true, true, true, true,]
  },
]

const Packets = () => {
  return (
    <Container>
      <Title>У нас есть 2 пакета услуг</Title>
      <div className={styles.root}>
        {packets.map((e, i) =>
          <div key={e.title} className={styles.wrapper}><div className={styles.top} dangerouslySetInnerHTML={{__html: e.title}}></div>
          <div key={i} className={styles.card}>
            <div className={styles.innner}>
              <div className={styles.children}>
                {e.children.map((child, i) =>
                  <div key={i} className={cn(styles.child)}>
                    {typeof child == 'boolean' ? (child ? <Flag viewBox="0 0 18 14" className={cn( styles.icon, styles.flag)} /> : <Line viewBox="0 0 14 1" className={cn( styles.icon, styles.flag)} />) : <><Line  className={styles.icon} viewBox="0 0 14 1"/><div>{child}</div></>}
                  </div>
                )}
              </div>
              {e.price ?
                <div className={styles.price}>
                  <div className={styles.stock}>{e.price}</div>
                  <Button className={styles.button}>Купить</Button>
                </div>
                : <Button className={styles.button}>скачать полную версию</Button>
              }
            </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Packets;