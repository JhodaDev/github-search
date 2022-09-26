<script>
    export let avatar = "";
    export let user = "";
    export let alias = "";
    export let join = "";
</script>

<header class="flex items-start gap-6">
    <picture>
        <img src={avatar} alt="avatar" class="rounded-full w-24 h-w-24" />
    </picture>
    <div class="text-white">
        <h3 class="font-semibold text-lg">{user}</h3>
        <a href="/" class="text-primary mb-3 inline-block">@{alias}</a>
        <p class="text-sm">Joined {join}</p>
    </div>
</header>
