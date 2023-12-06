<script>
    import { Link } from 'svelte-routing';
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import EntryButton from '../components/EntryButton.svelte';
    import HomeButton from '../components/HomeButton.svelte';
</script>

<main>
    <Navbar />
    <h1>Congratulations!</h1>
    <p>Your dream has successfully been uploaded to the dreamspace.</p>
    <Link to="/data-entry">
        <button>Submit another dream?</button>
    </Link>
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