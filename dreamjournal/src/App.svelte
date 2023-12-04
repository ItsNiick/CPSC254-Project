<script>
	export let name;
	import { Router, Link, Route } from 'svelte-routing';
	import Footer from './components/Footer.svelte';
	import Navbar from './components/Navbar.svelte';
	import EntryButton from './components/EntryButton.svelte';
    import DataEntry from './routes/data-entry.svelte';
</script>

<Router>
	<main>
		<Navbar />
		<Route path="/data-entry" component={DataEntry}	/>
		<h1> Welcome to Slumber Scribbles - Your Personal Gateway to the Dream World!</h1>
		<p><center>Every dream is a masterpiece waiting to be unveiled. Our platform offers a serene space where your dreams take the center stage. <br>
			Here, you can weave the fabric of your nocturnal imaginations into words, creating a tapestry of tales that breathe life into your sleep's silent stories.</center></p>

		<h2> Personalized Dream Journal </h2>
		<p><center>Your dreams are personal, and so is your journal. Tailor your entries, organize your dream sequences, and revisit your nocturnal journeys whenever you wish. <br>
			Dive deep into the oceans of your dream's meanings or soar high in the endless skies of imagination, all within your private and secure journal.</center></p>

		<h2> Explore and Be Inspired </h2>
		<p><center>Connect with a community of dreamers, sharing the essence of their night-time odysseys. <br>
			Gain insights, find inspirations, and enrich your dream journaling experience in a space that celebrates the boundless creativity of dreamers like you!</center></p>
			
		<Link to="/data-entry">
			<EntryButton type="primary" flat={false}>Create new entry</EntryButton>
		</Link>
		<!--Move EntryButton to more prefered location later. 
		Change flat={true} if want no-shadow.
		type="primary" = Sky blue #87CEEB. type="secondary" = Teal #008080-->
			
		<Footer />
	</main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #2D87A8;
		font-size: 2em;
		font-weight: 600;
	}

	
	h2 {
		color: #2D87A8;
		font-size: 2em;
		font-weight: 200;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>