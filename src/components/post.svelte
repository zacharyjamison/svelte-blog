<script>
    export let title;
    export let author;
    export let message;
  
  </script>
  
  
  <div class="flex top-4 mx-8 font-dosvga">
      <div class="card w-full bg-purple-700 shadow-xl bg">
          <div class="card-body">
              <h2 class="card-title">{title}</h2>
            <p>{message}</p>
            <div class="card-actions justify-end">
              <span>written by: {author}</span>
            </div>
          </div>
      </div>
  </div>