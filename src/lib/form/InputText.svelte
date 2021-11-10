
<script lang="ts">
    export let type: 'email' | 'password' | 'text';
    export let name: string;
    export let value: string;
    export let disabled = false;
    export let required = false;
</script>

<div class="form-control mt-5">
    <input {type} {name} {value} {required} {disabled} class="input input-bordered" />
</div>
