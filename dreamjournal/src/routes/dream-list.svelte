<script>
    import { Link } from 'svelte-routing';
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import EntryButton from '../components/EntryButton.svelte';
    import HomeButton from '../components/HomeButton.svelte';
    import DeleteButton from '../components/DeleteButton.svelte';
    import UpdateButton from '../components/UpdateButton.svelte';
</script>

<main>
    <Navbar />
    <h1>Here is your dream list.</h1>
    <p>You can explore your past dreams, update them, or even delete them.</p>
    <Link to="/data-entry">
        <button>Submit another dream</button>
    </Link>
    <DeleteButton>Delete this dream</DeleteButton>
    <UpdateButton>Update this dream</UpdateButton>
    <Footer />
</main>


<style>
    main {
		text-align: center;
		padding: 0%;
		max-width: 240px;
		margin: 0 auto;
	}
  
    h1 {
		color: #2D87A8;
		font-size: 2em;
		font-weight: 600;
	}

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

    @media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>