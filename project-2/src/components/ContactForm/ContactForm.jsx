import Button from "../Button/Button";
import styles from "./ContactForm.module.css"
import {TbMessage2} from "react-icons/tb"
import {MdCall} from "react-icons/md"
import {HiMail} from "react-icons/hi"
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("Hari")
  const [email, setEmail] = useState("hnagle.0@gmail.com")
  const [text, setText] = useState("Support or query")

  const onSubmit = (event) => {
    event.preventDefault()

    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)


  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button
          text="VIA SUPPORT CHAT"
          icon={<TbMessage2 fontSize="20px"/>}
        />

        <Button
          text="VIA CALL"
          icon={<MdCall fontSize="20px"/>}
        />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="20px"/>}
        />

        <form onSubmit={onSubmit}>

          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="4" required/>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
          <Button text="SUBMIT"/>
          </div>

          <div>
            {name + " :  " + email + " : " + text }
          </div>

        </form>

      </div>

      <div className={styles.contact_image}>
        <img height="450px" src="./images/Service.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm;