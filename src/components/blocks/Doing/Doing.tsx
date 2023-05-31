import React from 'react';
import styles from './Doing.module.scss'
import Title from "@/components/UI/Title/Title";
import Container from "@/components/other/Container/Container";
import Phone from '/public/icons/phone.svg'
import Docs from '/public/icons/docs.svg'
import Checkbox from '/public/icons/checkbox.svg'
import Box from '/public/icons/box.svg'
import Button from "@/components/UI/Button/Button";
import Link from "next/link";

const items = [
  {
    name: 'Позвоните нам',
    icon: <Phone/>
  },
  {
    name: 'Заполните заявление',
    icon: <Docs/>
  },
  {
    name: 'Узнайте статус решения вопроса',
    icon: <Checkbox/>
  },
  {
    name: 'Полный архив всех условий',
    icon: <Box/>
  },
]

const Doing = () => {
  return (
    <>
    <Container className={styles.root} min>
      <Title>Что делать, если произошел<br/> страховой случай?</Title>
      <div className={styles.cards}>
        {items.map(e =>
          <div key={e.name} className={styles.card}>
            {e.icon}
            <div className={styles.name}>{e.name}</div>
          </div>
        )}
      </div>
    </Container>
      <Container className={styles.download}>
      <Title>Посмотреть полную <br/> презентацию продукта</Title>
      <a target={'_blank'} href={'/files/file.pdf'}> <Button className={styles.btn}>Скачать PDF</Button></a>
      </Container>
    </>
  );
};

export default Doing;