<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import type { SelfServiceRegistrationFlow } from '$lib/api';
    import Form, { EventType } from '$lib/form/Form.svelte';

    export let registerFlowSettings: SelfServiceRegistrationFlow;
    const { ui } = registerFlowSettings;

    const dispatch = createEventDispatcher<EventType>();
    const handleSubmit = (data) => dispatch('submit', data);
</script>

<Form on:submit={handleSubmit} {ui}>
    <slot name="title">Register</slot>

    <slot name="button">Register</slot>
</Form>
