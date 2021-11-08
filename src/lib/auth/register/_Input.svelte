<script lang="ts">
    import type { UiNodeInputAttributes } from '$lib/api';
    import InputHidden from './_InputHidden.svelte';
    import InputText from './_InputText.svelte';

    export let attributes: UiNodeInputAttributes;

    const { type, name, value = '', required, disabled } = attributes;
</script>

{#if (type === 'hidden' || type === 'submit') && !disabled}
    <InputHidden {name} {value} {required} />
{:else if type === 'email' || type === 'text' || type === 'password'}
    <InputText {type} {name} {value} {required} {disabled} />
{/if}
