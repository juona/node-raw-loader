# Motivation

I created this little script to help me import my GraphQL type definitions into NodeJS as strings. This allowed me to keep all GraphQL declarations in `.graphql` files.

I later realized that I could use this code to import just about any file as a raw string into my code.

# Usage

Pass the extensions of the files you wish to raw-import to the utility function:

	require("node-raw-loader")(".graphql", ".gql", ".svg");

or:

	import rawLoader from "./raw-file-loader";
	rawLoader(".graphql", ".gql", ".svg");

Say you have a `.graphql` file like this:

	type Product {
	  title: String!
	  price: NonNegativeInt!
	}

	extend type Query {
	  product(productID: ID!): Product
	}

You can now import it as a string into your NodeJS code:

	import schema from "./product.schema.graphql"; // imports the schema as a string
	console.log(schema); // prints the schema
