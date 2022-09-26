<script>
    import CardPointer from "./CardPointer.svelte";
    export let information = {};
</script>

<body class="mt-8 text-white font-light">
    <p>
        {#if information.bio}
            {information.bio}
        {:else}
            This profile has no bio
        {/if}
    </p>
    <div
        class="grid grid-cols-3 items-center bg-body px-4 py-4 mt-4 rounded-lg"
    >
        <div class="flex flex-col items-center">
            <h3 class="text-sm">Repos</h3>
            <span class="text-lg font-medium">{information.public_repos}</span>
        </div>
        <div class="flex flex-col items-center">
            <h3 class="text-sm">Followers</h3>
            <span class="text-lg font-medium">{information.followers}</span>
        </div>
        <div class="flex flex-col items-center">
            <h3 class="text-sm">Following</h3>
            <span class="text-lg font-medium">{information.following}</span>
        </div>
    </div>
    <div class="mt-4 text-lg">
        <CardPointer
            text={information.location}
            icon="fa-solid fa-location-pin"
        />
        <CardPointer text={information.url} icon="fa-solid fa-link" />
        <CardPointer
            text={information.twitter_username}
            icon="fa-brands fa-twitter"
        />
        <CardPointer text={information.company} icon="fa-solid fa-building" />
    </div>
</body>
