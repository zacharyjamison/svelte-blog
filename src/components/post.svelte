<script>

  import { Link } from 'svelte-navigator';

  export let id;
  export let title;
  export let author;
  export let message;

</script>


<div class="flex top-4 mx-8">
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <Link to="/post/{id}" class="text-white">
            <h2 class="card-title">{title}</h2>
          </Link>
          <p>{message}</p>
          <div class="card-actions justify-end">
            <span>written by: {author}</span>
          </div>
        </div>
    </div>
</div>