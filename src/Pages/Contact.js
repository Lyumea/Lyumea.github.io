import {useState, useEffect} from "react";
import plane from "../assets/img/icons/envoyer-message.svg";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const MyError = styled.p`
    color : var(--MyGray);
    font-weight : 300;
    text-align : center;
`

const AirPlane = styled.img`
    &:hover{
        top : ${(props) =>  (props.clicked) ? "100%" : ""};
        left : ${(props) =>  (props.clicked) ? "100%" : ""};
    }
`

const Confirmed = styled.p`
    color : var(--Zomp);
    text-align : center;
    font-weight : 300;
    margin-top : 2rem;
`

export default function Contact(){

    useEffect(() => {
        document.title = 'Me contacter | NAI';
      }, []);

    const [isSubmit, setIsSubmit] = useState(false);
    const { register, handleSubmit, formState:{ errors }} = useForm();

    const onSubmit = (data,e) => {
        e.preventDefault();
        emailjs.send('service_liyvlzh', 'template_vxxt6jk', {
            user_name: data.Nom,
            From_name: "NAI",
            user_email: data.Mail,
            message: data.Message,
            }, '8HUrezcecj3xFKF2q');
        setIsSubmit(true)
    };

    return(
        <div className="contact">

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="container contact-form">
                <div className="contact-desc-container">
                <h1>Me Contacter</h1>
                <p>Un projet ? Une demande ? Ou même un petit message ? Contactez-moi !</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="group">
                    <input type="text" name="user_name" id="nom" aria-label="votre nom" {...register("Nom", { required: "Votre nom est obligatoire.", maxLength: { value : 20, message : "20 caractères maximum"}, minLength:{ value: 2, message : "2 caractères minimum"} })} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="nom"> Nom </label>
                    {(errors.Nom?.message) ? <MyError className="contact-error">{errors.Nom?.message}</MyError> : <></>}
                </div>

                <div className="group">
                    <input type="email" name="user_email" id="email" aria-label="votre adresse e-mail" {...register("Mail", { required: "Votre mail est obligatoire.", pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message:"Votre email n'est pas valide"}, maxLength: {value: "255", message: "Votre email n'est pas valide"} })} aria-invalid={errors.mail ? "true" : "false"} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="email"> E-Mail </label>
                    {(errors.Mail?.message) ? <MyError className="contact-error">{errors.Mail?.message}</MyError> : <></>}
                </div>

                <div className="group">
                    <textarea id="message" name="message" aria-label="votre message" {...register("Message", { required: "Votre message est obligatoire.", maxLength: {value : 255, message : "Votre message est trop long (max. 255 caractères)"}, minLength:{ value: 10, message : "10 caractères minimum"} })} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="message"> Votre Message </label>
                    {(errors.Message?.message) ?  <MyError className="contact-error">{errors.Message?.message}</MyError> : <></>}
                </div>

                <div>
                    <button value="Envoyer" type="submit" > <span> Envoyer </span> <AirPlane clicked={isSubmit} src={plane} alt="Enovyer votre message" /> </button>
                    {(isSubmit) ? <Confirmed>Merci ! Je vais vous répondre dès que possible !</Confirmed> : <></>}
                </div>
            </form>
        </div>
        </div>
    )
}