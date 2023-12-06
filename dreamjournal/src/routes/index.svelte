<script>
    import { Router, Route } from 'svelte-routing';
    import App from '../App.svelte';
    import DataEntry from './data-entry.svelte';
    import SuccessfulSubmission from './successful-submission.svelte';
</script>

<Router>
    <Route path="/" component={App} />
    <Route path="/data-entry" component={DataEntry} />
    <Route path="/successful-submission" component={SuccessfulSubmission} />
</Router>