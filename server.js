import express from 'express';
import { MongoClient, Server } from 'mongodb';
let app = express();
import {MONGO_URL} from './config';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

app.use(express.static('public'));

const Port = process.env.port || 3000;
let db;

(async () => {
	let connection = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
	db = connection.db('rgrjs');

	app.use('/graphql', GraphQLHTTP({
			schema: schema(db),
			graphiql: true
	}));

	app.listen(Port, () => console.log(`App listening on port ${Port}`));
})();
