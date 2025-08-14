import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const { articleId } = event.params;

  console.log("This is our load function");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );
  const responseBody = await response.json();

  return {
    title: responseBody.title,
    blogArticle: responseBody.body,
  };
};