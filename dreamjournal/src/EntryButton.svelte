<script>
    export let type = 'primary';
    export let flat = false;
</script>

<button class={type} class:flat={flat}>
    <slot></slot>
</button>

<style>
    button{
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    .primary{
        background: #87CEEB;
        color: white;
    }
    .secondary{
        background: #008080;
        color: white;
    }
    .flat{
        box-shadow: none;
    }
    
</style>