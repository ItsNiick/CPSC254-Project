<script>
  import { onMount } from 'svelte';

  export let onDelete;

  function handleDelete() {
    if (onDelete) {
      onDelete();
    }
  }
</script>

<button on:click={handleDelete}>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    background: #FF6347;
    color: white;
  }
</style>