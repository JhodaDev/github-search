<script>
    import CardPointer from "./CardPointer.svelte";
</script>

<body class="mt-8 text-white font-light">
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti
        nisi numquam blanditiis inventore saepe voluptatibus odit totam.
    </p>
    <div
        class="grid grid-cols-3 items-center bg-body px-4 py-4 mt-4 rounded-lg"
    >
        <div class="flex flex-col items-center">
            <h3 class="text-sm">Repos</h3>
            <span class="text-lg font-medium">8</span>
        </div>
        <div class="flex flex-col items-center">
            <h3 class="text-sm">Followers</h3>
            <span class="text-lg font-medium">3938</span>
        </div>
        <div class="flex flex-col items-center">
            <h3 class="text-sm">Repos</h3>
            <span class="text-lg font-medium">8</span>
        </div>
    </div>
    <div class="mt-4 text-lg">
        <CardPointer text="San Fransico" icon="fa-solid fa-location-pin" />
        <CardPointer text="https://github.blog" icon="fa-solid fa-link" />
        <CardPointer text="Not Available" icon="fa-brands fa-twitter" />
        <CardPointer text="Github" icon="fa-solid fa-building" />
    </div>
</body>