interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface EnrichedPost extends Post {
  author: User;
  comments: Comment[];
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status} for ${url}`);
  }

  return response.json() as Promise<T>;
}

async function getPost(id: number): Promise<Post> {
  return fetchJson<Post>(`${BASE_URL}/posts/${id}`);
}

async function getUser(id: number): Promise<User> {
  return fetchJson<User>(`${BASE_URL}/users/${id}`);
}

async function getCommentsForPost(postId: number): Promise<Comment[]> {
  return fetchJson<Comment[]>(`${BASE_URL}/posts/${postId}/comments`);
}

async function getEnrichedPost(postId: number): Promise<EnrichedPost> {
  const post = await getPost(postId);

  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getCommentsForPost(post.id),
  ]);

  return {
    ...post,
    author,
    comments,
  };
}

async function main(): Promise<void> {
  const user1 = await getUser(1)
  console.log(user1)  
//   const enrichedPost = await getEnrichedPost(1);

//   console.log(`"${enrichedPost.title}" by ${enrichedPost.author.name}`);
//   console.log(`${enrichedPost.comments.length} comments`);
//   console.log(enrichedPost.comments[0]?.body);
}

main()
