<script>
    import { Router, Route } from 'svelte-routing';
    import App from '../App.svelte';
    import DataEntry from './data-entry.svelte';
    import SuccessfulSubmission from './successful-submission.svelte';
    import DreamList from './dream-list.svelte';
    import EditDream from './edit-dream.svelte';
</script>

<Router>
    <Route path="/" component={App} />
    <Route path="/data-entry" component={DataEntry} />
    <Route path="/successful-submission" component={SuccessfulSubmission} />
    <Route path="/dream-list" component={DreamList} />
    <Route path="/edit-dream/:id" component={EditDream} />
</Router>