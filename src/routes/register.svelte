<script lang="ts">
    import { onMount } from 'svelte';

    import Form from '$lib/auth/register/Form.svelte';
    import Loading from '$lib/Loading.svelte';
    import {
        SelfServiceRegistrationFlow,
        startRegistrationFlow,
        submitRegistrationFlow,
    } from '$lib/api';

    let flow: SelfServiceRegistrationFlow | undefined;

    onMount(async () => {
        flow = await startRegistrationFlow();
    });

    const handleSubmit = ({ detail }) => {
        submitRegistrationFlow(flow, detail);
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
