<script>
  import Navigator from './components/navigator.svelte'
  import Main from './components/main.svelte'
  import {Route, Router} from 'svelte-navigator'
  import Post from './components/post.svelte';
  import { posts } from './store';

  let userPost;

  posts.subscribe( p => {
    userPost = p;
  });

  console.log(userPost)

</script>

<Navigator />

<Router>
  <Route path='/'>
    <Main />
  </Route>

  <Route path='/post/:id' let:params>
    <Post 
      title={userPost[params.id].title} 
      author={userPost[params.id].author} 
      message={userPost[params.id].post}/>
  </Route>

</Router>

<style>
 
</style>
