<script>
  import {Link, Router} from 'svelte-navigator';
</script>

<Router>
  <div class="navbar bg-base-100 mb-8">
      <div class="flex-1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <Link class="btn btn-ghost normal-case text-xl" to='/'>Svelte-Blog</Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>+ Add Post</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>View Posts</a></li>
        </ul>
      </div>
  </div>
</Router>