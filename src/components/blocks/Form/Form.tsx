import React from 'react';
import Container from "@/components/other/Container/Container";
import Title from "@/components/UI/Title/Title";
import styles from './Form.module.scss'
import InputMask from 'react-input-mask';
import Girl from '/public/icons/girl.svg'
import Button from "@/components/UI/Button/Button";

const Form = () => {

  return (
    <Container>
      <Title>Уточнить детали</Title>
      <div className={styles.text}>Если вы не нашли ответа на свой вопрос, заполните <br/> эту форму, а мы как  можно быстрее ответим вам.</div>
      <div className={styles.root}>
        <div className={styles.formWrapper}>
          <form className={styles.form} action="">
            <div className={styles.inputComponent}>
              <div className={styles.label}>ФИО*</div>
              <input placeholder={'Иван Иванович Иванов'} className={styles.input} type="text"/>
            </div>
            <div className={styles.inputComponent}>
              <div className={styles.label}>Номер телефона*</div>
              <InputMask mask="+7(999) 999 99-99" placeholder={'+7 (495) 453 33-41'} className={styles.input} type="text"/>
            </div>
            <div className={styles.inputComponent}>
              <div className={styles.label}>Email*</div>
              <input placeholder={'delolive@mail.ru'} className={styles.input} type="email"/>
            </div>
            <Button className={styles.btn}> Отправить</Button>
          </form>
        </div>
        <Girl className={styles.girl}/>
      </div>
    </Container>
  );
};

export default Form;