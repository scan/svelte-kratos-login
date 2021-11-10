<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import type { SelfServiceLoginFlow } from '$lib/api';
    import Form, { EventType } from '$lib/form/Form.svelte';

    export let loginFlowSettings: SelfServiceLoginFlow;
    const { ui } = loginFlowSettings;

    const dispatch = createEventDispatcher<EventType>();
    const handleSubmit = (data) => dispatch('submit', data);
</script>

<Form on:submit={handleSubmit} {ui}>
    <slot name="title">Login</slot>

    <slot name="button">Login</slot>
</Form>
