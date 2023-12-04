<script>
    import { Router, Route } from 'svelte-routing';
    import App from '../App.svelte';
    import DataEntry from './data-entry.svelte';
</script>

<Router>
    <Route path="/" component={App} />
    <Route path="/data-entry" component={DataEntry} />
</Router>