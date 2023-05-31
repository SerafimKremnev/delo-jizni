import React, {useState} from 'react';
import Container from "@/components/other/Container/Container";
import Title from "@/components/UI/Title/Title";
import styles from './Questions.module.scss'
import {AnimatePresence, motion} from 'framer-motion'


const items = [
  {
    question: 'Сколько раз в год можно обратиться к терапевту или педиатру по данной программе? ',
    answer: 'Количество обращений не ограничено в течение всего срока действия договора. '
  },
  {
    question: 'Сколько раз в год можно обратиться к узкому специалисту? ',
    answer: 'Количество обращений достигает может достигать 20 раз. '
  },
  {
    question: 'Как получить консультацию врача? ',
    answer: 'Позвоните по номеру +7 495 967 13 01 и мы вас запишем к нужному специалисту на консультацию'
  },
  {
    question: 'Как получить консультацию педиатра, если возраст ребенка меньше 1 года, и оформить на ребенка программу нельзя? ',
    answer: 'Обговаривается индивидуально для каждого клиента'
  },
]

const Questions = () => {
  const [active, setActive] = useState<null | number>(null)
  const variants = {
    open: {
      opacity: 1,
      height: 'auto'
    },
    hide: {
      opacity: 0,
      height: '0'
    }
  }
  return (
    <Container min>
      <Title>Часто задаваемые вопросы</Title>
      <div className={styles.accordions}>
        {items.map((e, i) =>
          <div key={e.answer}>
            <div onClick={() => {
              if(active === i) {
                setActive(null)
              } else {
                setActive(i)
              }
            }} className={styles.accordion}>
              <div  className={styles.question}>
                {e.question}
              </div>
            </div>
          <AnimatePresence>
            {i === active && <motion.div
              exit={'hide'}
              initial={'hide'}
              animate={'open'}
              className={styles.answer}
              variants={variants}
              >
              <div className={styles.inner}>
                {e.answer}
              </div>
          </motion.div>}
          </AnimatePresence>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Questions;