<script>

  import { Link } from 'svelte-navigator';

  export let id;
  export let title;
  export let author;
  export let message;

</script>


<div class="flex top-4 mx-8 font-dosvga">
    <div class="card w-full shadow-xl bg-purple-700">
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