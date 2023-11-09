import bodyParser from 'body-parser';
import cors from 'cors';

export default function expressConfig(app){
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    const PORT = process.env.PORT ? process.env.PORT : 3001;
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
}