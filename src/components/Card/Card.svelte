<script>
    import { store } from "../../store/store";
    import Container from "../UI/Container.svelte";
    import CardBody from "./CardBody.svelte";
    import CardHeader from "./CardHeader.svelte";

    let user = {};

    store.subscribe((value) => user = value);
</script>

<Container>
    <div class="bg-primary mt-5 rounded-lg px-4 py-6">
        <div>
            <CardHeader
                avatar={user.avatar_url}
                user={user.name ? user.name : user.login}
                alias={user.login}
                join={user?.created_at}
            />
            <CardBody information={user} />
        </div>
    </div>
</Container>
