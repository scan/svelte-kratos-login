<script lang="ts">
    export let name: string;
    export let value: string;
    export let required = false;
</script>

<input type="hidden" {name} {value} {required} class="hidden" />
