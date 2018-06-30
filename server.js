import express from 'express';
import { MongoClient, Server } from 'mongodb';
let app = express();
import {MONGO_URL} from './config';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

app.use(express.static('public'));


const Port = process.env.port || 3000;
let db;

MongoClient.connect(MONGO_URL, { useNewUrlParser: true }).then((connection) => {
	db = connection.db('rgrjs');
	db.collection('links').find({}).toArray((err, links) => {
		if(err) throw err;


		app.use('/graphql', GraphQLHTTP({
			schema: schema(db),
			graphiql: true
		}));

		app.listen(Port, () => console.log(`App listening on port ${Port}`));

		console.log(JSON.stringify(links));
	});
}).catch((error) => {
	console.log('ERROR', error);
});

app.get('/data/links', (req, res) => {
	db.collection('links').find({}).toArray((err, links) => {
		if (err) throw err;

		res.json(links);
	})
});
