<script>
    import handler, { getCurrentUser } from "../api/github_api";
    import Card from "../components/Card/Card.svelte";
    import Header from "../components/Header/Header.svelte";
    import Search from "../components/Search/Search.svelte";
    import { store } from "../store/store";

    store.subscribe(async (value) => {
        if (!value.hasOwnProperty("id")) {
            handler();
            const data = await getCurrentUser();
            // store.set({});
        }
    });
</script>

<Header />
<Search />
<Card />
