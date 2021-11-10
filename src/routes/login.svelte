<script lang="ts">
    import { onMount } from 'svelte';

    import Form from '$lib/login/Form.svelte';
    import Loading from '$lib/Loading.svelte';
    import { SelfServiceLoginFlow, startLoginFlow, submitLoginFlow } from '$lib/api';

    let flow: SelfServiceLoginFlow | undefined;

    onMount(async () => {
        flow = await startLoginFlow();
    });

    const handleSubmit = ({ detail }) => {
        submitLoginFlow(flow, detail);
    };
</script>

{#if !flow}
    <div class="container mx-auto max-w-md my-5 card bordered">
        <div class="card-body min-h-[22rem]">
            <Loading />
        </div>
    </div>
{:else}
    <Form registerFlowSettings={flow} on:submit={handleSubmit} />
{/if}
