import mongoose from "mongoose";

const conectarDB = () => {
    const db = mongoose.connect(process.env.MONGO_URI)
        .then((db) => {
            const url = `${db.connection.host}:${db.connection.port}`
            console.log(`La conexión a la base de datos se ha realizado correctamente`);
            console.log(`MongoDB conectado en: ${url}`);
        })
        .catch(error => console.log(error))
}
// const conectarDB = async () => {
//     try {
//         const db = await mongoose.connect(process.env.MONGO_URI);

//         const url = `${db.connection.host}:${db.connection.port}`
//         console.log(`MongoDB conectado en: ${url}`);
//     } catch (error) {
//         console.log(`error: ${error.message}`);
//         process.exit(1)
//     }
// }


export default conectarDB;