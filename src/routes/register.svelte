<script lang="ts">
    import { onMount } from 'svelte';

    import Form from '$lib/auth/register/_Form.svelte';
    import Loading from '$lib/_Loading.svelte';
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
    <Loading />
{:else}
    <Form registerFlowSettings={flow} on:submit={handleSubmit} />
{/if}
