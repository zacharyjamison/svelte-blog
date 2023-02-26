<script>
    import Card from "./card.svelte";
    import data from "../data.json";

    let posts = data.data;
</script>

<main>
    {#each posts as post}
        <div class="flex justify-center mt-1">
            <div>
                <Card id={post.id} 
                      title={post.title} 
                      message={post.post.slice(0,300)}
                      author={post.author} 
                />
            </div>
        </div>
    {/each}
</main>