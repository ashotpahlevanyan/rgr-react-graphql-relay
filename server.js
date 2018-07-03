import express from 'express';
import { MongoClient, Server } from 'mongodb';
import fs from 'fs';
let app = express();
import {MONGO_URL} from './config';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';


app.use(express.static('public'));

const Port = process.env.port || 3000;
let db;

(async () => {
	try {
		let connection = await MongoClient.connect(MONGO_URL, {useNewUrlParser: true});
		db = connection.db('rgrjs');

		let schema = Schema(db);

		app.use('/graphql', GraphQLHTTP({
			schema,
			graphiql: true
		}));

		app.listen(Port, () => console.log(`App listening on port ${Port}`));

		// generate the schema
		let json = await graphql(schema, introspectionQuery);
		fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
			if (err) throw err;

			console.log('Json schema created');
		});
	} catch (e) {
		console.log(e);
	}
})();
