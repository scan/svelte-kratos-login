<script lang="ts" context="module">
    import { createEventDispatcher } from 'svelte';

    import { isUiNodeInputAttributes, UiContainer, UiNodeInputAttributes } from '$lib/api';
    import Input from '$lib/form/Input.svelte';

    type FormElementKey = UiNodeInputAttributes['name'];
    export type EventType = Record<'submit', Record<FormElementKey, string>>;
</script>

<script lang="ts">
    export let ui: UiContainer;

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
        <h1 class="card-title">
            <slot name="title">Register</slot>
        </h1>

        {#each ui.nodes as { attributes }}
            {#if isUiNodeInputAttributes(attributes)}
                <Input {attributes} />
            {/if}
        {/each}

        <div class="card-action mt-5">
            <button type="submit" class="w-full btn btn-primary">
                <slot name="button">Submit</slot>
            </button>
        </div>
    </form>
</div>
