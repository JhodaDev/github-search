<script>
    import { getUser } from "../../api/github_api";
    import { store } from "../../store/store";
    import Container from "../UI/Container.svelte";

    let inputValue = "";

    const handleSubmit = async () => {
        const data = await getUser(inputValue);
        // store.set(data);
    };
</script>

<Container>
    <form
        on:submit|preventDefault={handleSubmit}
        class="relative bg-primary rounded-lg flex items-center px-2 text-white"
    >
        <i
            class="fa-solid fa-magnifying-glass text-primary text-lg absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
            class="w-full py-3 px-8 rounded-lg bg-transparent outline-none "
            type="text"
            placeholder="Search Github username"
            bind:value={inputValue}
        />
        <input
            type="submit"
            value="Search"
            class="bg-secondary px-4 py-1 rounded-md"
        />
    </form>
</Container>
