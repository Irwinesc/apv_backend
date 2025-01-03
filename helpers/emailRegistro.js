import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
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
        subject: 'Comprueba tu cuenta de APV',
        text: 'Comprueba tu cuenta de APV',
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en APV.</p>
        <p>Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>
        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })

    console.log("Mensaje enviado: %s", info.messageId)
}

export default emailRegistro