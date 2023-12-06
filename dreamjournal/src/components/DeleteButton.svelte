<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let dream;

  function handleClick() {
    dispatch('delete', dream);
  }
</script>

<button on:click={handleClick}>
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
      background: #87CEEB;
      color: white;
    }
  </style>