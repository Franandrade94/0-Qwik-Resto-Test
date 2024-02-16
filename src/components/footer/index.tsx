import './footer.css';
import { component$ } from "@builder.io/qwik";

export default component$(() => {

    return(
        <footer class="footer-container">
           <div class='footer-section1'>
                <div style={{ textAlign:'left' }} class='footer-content'>
                    <h4 style={{ fontSize: "20px", fontWeight: '600',  }} >About us</h4>
                    <p style={{ fontSize: "15px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class='footer-content'>
                    <h1 style={{ fontSize: "50px", fontWeight: '700', color: '#DFA040' }}>Logo</h1>
                    <p style={{ fontSize: "15px", textAlign: 'center' }}>correo</p>
                </div>
                <div style={{ textAlign:'right' }} class='footer-content2'>
                    <h4 style={{ fontSize: "20px",fontWeight: '600' }}>Comunidad</h4>
                    <p style={{ fontSize: "15px" }}>imput</p>
                    <p style={{ fontSize: "15px" }}>imput</p>
                </div>
           </div>

           <div class='footer-section2'>
                <p style={{ fontSize: "15px" }}>Nombre 2023.All right reserved</p>
                <p style={{ fontSize: "12px" }}>policy privacy</p>
                <p style={{ fontSize: "12px" }}>security</p>
                <p style={{ fontSize: "12px" }}>Therms of use</p>
           </div>

        </footer>
    )

})