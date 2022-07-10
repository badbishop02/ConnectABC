//next js allows us create our own backend.
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
// renamed hello.js to comments.js

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: { // finding the graphCMS token in settings , api access, and 
      // create a permanent Auth token
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    }
  })
 //MUTATION query not a GET query. //add new data
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) { id }
    }
  `
 //run it by:
  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error)
  }

}

//errors encountered

// comment has to be referenced to the post in the post schema
//this will create a two way reference with read-write permissions
// between the comment and the post.
// to accept the post as a parameter to the current comment.

//Giving permissions to make changes to the API endpoint.
//settings, permanent auth tokens, edit and grant permissions.
// this will prevent any permission errors in the future.