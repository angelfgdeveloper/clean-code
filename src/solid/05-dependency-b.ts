import { JsonDataBaseService, LocalDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
  body:   string;
  id:     number;
  title:  string;
  userId: number;
}

export class PostService {

  private posts: Post[] = [];

  constructor( private postProvider: PostProvider ) {}

  async getPosts() {
    // Dependenicas ocultas (No hacerlo)
    // const jsonDB = new LocalDataBaseService();
    // const jsonDB = new JsonDataBaseService();
    // this.posts = await jsonDB.getPosts();

    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}