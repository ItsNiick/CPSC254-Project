<script>
    import { Link } from 'svelte-routing';
</script>
  
  <Link to="/data-entry">
    <button>
      <slot></slot>
    </button>
  </Link>
  
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