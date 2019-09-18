import {ApolloServer, gql} from 'apollo-server';

// define our schema
let typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;

// route query level type 
let resolvers = {
    Query: {
        books: () => books
    }
}

const server = new ApolloServer({typeDefs, resolvers});
server.listen()

let books = [
    {
        title: '斗罗大陆',
        author: '唐家三少'
    },
    {
        title: '斗破苍穹',
        author: '天蚕土豆'
    }
]