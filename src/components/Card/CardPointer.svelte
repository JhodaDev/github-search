<script>
    export let text = "";
    export let icon = "";
</script>

<div class="flex items-center mb-3 gap-3 text-base">
    <div class="w-6 h-6 flex items-center justify-center">
        <i class={`${icon}`} />
    </div>
    {#if text}
        <span>{text}</span>
    {:else}
        <span class="text-gray-400">Not available</span>
    {/if}
</div>
