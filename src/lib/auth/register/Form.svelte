<script lang="ts">
    import {
        isUiNodeInputAttributes,
        SelfServiceRegistrationFlow,
        UiNodeInputAttributes,
    } from '$lib/api';
    import Input from './Input.svelte';
    import { createEventDispatcher } from 'svelte';

    export let registerFlowSettings: SelfServiceRegistrationFlow;
    type FormElementKey = UiNodeInputAttributes['name'];
    type EventType = Record<'submit', Record<FormElementKey, string>>;

    const dispatch = createEventDispatcher<EventType>();
    const handleSubmit = (e) => {
        const formData = new FormData(e.target);
        const data: Record<FormElementKey, string> = {};
        formData.forEach((value, key) => {
            if (typeof value === 'string') {
                data[key] = value;
            }
        });

        dispatch('submit', data);
    };
</script>

<div class="container mx-auto max-w-md my-5 card bordered">
    <form on:submit|preventDefault={handleSubmit} class="card-body">
        <h1 class="card-title">Register</h1>

        {#each registerFlowSettings.ui.nodes as node}
            {#if isUiNodeInputAttributes(node.attributes)}
                <Input attributes={node.attributes} />
            {/if}
        {/each}

        <div class="card-action mt-5">
            <button type="submit" class="w-full btn btn-primary">Register</button>
        </div>
    </form>
</div>
