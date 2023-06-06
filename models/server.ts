import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../database/conecction';

class Server {
    private app: Application;
    private port: string ;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8000";
        // Conectar base de datos
        this.dbConection();
        // Middlewares
        this.middlewares();
        // Definir mis rutas
        this.routes();
    }

    // Conectar base de datos

    async dbConection(){
        try { 
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error('Error al iniciar la base de datos');
        }
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta publica
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}


export default Server;