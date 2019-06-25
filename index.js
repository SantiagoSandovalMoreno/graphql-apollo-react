import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
	res.send('Todo Listo');
});

//resolver
const root = {
	cliente: () => {
		return {
			id: 123424,
			nombre: 'Santiago',
			apellido: 'Sandoval',
			empresa: 'Quick',
			email: 'felipesantiagosandoval@gmail.com'
		};
	}
};
app.use(
	'/grapqhl',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(8000, () => {
	console.log('El servidor esta funcionando');
});
