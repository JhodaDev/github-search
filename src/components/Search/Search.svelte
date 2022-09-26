<script>
    import Container from "../UI/Container.svelte";
</script>

<Container>
    <form class="relative bg-primary rounded-lg flex items-center px-2 text-white">
        <i class="fa-solid fa-magnifying-glass text-primary text-lg absolute top-1/2 left-3 -translate-y-1/2" />
        <input
            class="w-full py-3 px-8 rounded-lg bg-transparent outline-none "
            type="text"
            placeholder="Search Github username"
        />
        <input type="submit" value="Saerch" class="bg-secondary px-4 py-1 rounded-md" />
    </form>
</Container>
