<script>
    import Container from "../UI/Container.svelte";
    import CardBody from "./CardBody.svelte";
    import CardHeader from "./CardHeader.svelte";
</script>

<Container>
    <div class="bg-primary mt-5 rounded-lg px-4 py-6">
        <div>
            <CardHeader />
            <CardBody />
        </div>
    </div>
</Container>
