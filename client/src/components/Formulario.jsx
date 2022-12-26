import React from "react";
import Navbar from "./Navbar";
import { postpeople } from "../redux/actions";
import "./styles/formulario.css";
export default function Formulario (){
    return (
        <div>
            <Navbar></Navbar>
                <label className="names">PUBLICA</label>
                <div id="container">
  <h1>&bull; Leer  Instrucciones &bull;</h1>
  <div class="underline">
  </div>
  <div class="icon_wrapper">
   
  </div>
  <form action="#" method="post" id="contact_form">
    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="Nombre/Nombres" name="name" id="name_input" required></input>
    </div>
    <div class="email">
      <label for="email"></label>
      <input type="text" placeholder="Apellido/Apellidos" name="email" id="email_input" required></input>
    </div>
    <div class="telephone">
      <label for="name"></label>
      <input type="number" placeholder="Edad" name="telephone" id="telephone_input" required></input>
    </div>
    <div class="telephone">
      <label for="name"></label>
      <input type="number" placeholder="Estatura" name="telephone" id="telephone_input" required></input>
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="Tatuajes" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="subject">
      <label for="subject"></label>
      <select placeholder="Ciudad de desaparición" name="subject" id="subject_input" required>
        <option disabled hidden selected>Seleccione ciudad de desaparición</option>
        <option>I'd like to start a project</option>
        <option>I'd like to ask a question</option>
        <option>I'd like to make a proposal</option>
      </select>
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="DESCRIBA LO ULTIMO QUE RECUERDA DE LA PERSONA ANTES DE DESAPARECER" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
  </form>
</div>
        </div>
    )
}