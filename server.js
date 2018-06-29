import express from 'express';
import { MongoClient, Server } from 'mongodb';
let app = express();
import {MONGO_URL} from './config';

app.use(express.static('public'));

app.listen(3000);


MongoClient.connect(MONGO_URL, { useNewUrlParser: true }).then((connection) => {
	let db = connection.db('rgrjs');
	db.collection('links').find({}).toArray((err, links) => {
		if(err) throw err;

		console.log(JSON.stringify(links));
	});
}).catch((error) => {
	console.log('ERROR', error);
});
