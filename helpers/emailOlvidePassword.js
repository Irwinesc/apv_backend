import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
        // host: process.env.EMAIL_HOST,
        // port: process.env.EMAIL_PORT,
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {email, nombre, token} = datos
    //Enviar el email
    const info = await transport.sendMail({
        from: 'APV - Administrador de pacientes de Veterinaria',
        to: email,
        subject: 'Reestablece tu password de tu cuenta de APV',
        text: 'Reestablece tu password de tu cuenta de APV',
        html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password.</p>
        <p>Haz click en el siguiente enlace para generar un nuevo password:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })

    console.log("Mensaje enviado: %s", info.messageId)
}

export default emailOlvidePassword