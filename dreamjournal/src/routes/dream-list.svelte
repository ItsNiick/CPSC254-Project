<script>
    import { Link } from 'svelte-routing';
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import DeleteButton from '../components/DeleteButton.svelte';
    import UpdateButton from '../components/UpdateButton.svelte';
    import { onMount } from 'svelte';

    let dreams = [];
    onMount(async () => {
        try {
        const response = await fetch('http://localhost:3000/api/dreams');
        if (!response.ok) {
            throw new Error(`Failed to fetch dreams with status: ${response.status}`);
        }

        dreams = await response.json();
        } catch (error) {
        console.error('Error fetching dreams:', error.message);
        }
    });

</script>

<main>
    <Navbar />
    <h1>Here is your dream list.</h1>
    <p>You can explore your past dreams, update them, or even delete them.</p>
    {#if dreams.length > 0}
    <ul>
      {#each dreams as dream (dream.id)}
        <li>
          <p>{dream.title}</p>
          <p>{dream.description}</p>
          <p>{dream.date}</p>
          <DeleteButton>Delete this dream</DeleteButton>
          <UpdateButton>Update this dream</UpdateButton>
        </li>
      {/each}
        </ul>
    {:else}
        <p>No dreams available.</p>
    {/if}
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

    ul {
        list-style: none; /* Remove bullet points */
        padding: 0;
    }

    li {
        margin-bottom: 1em;
    }

    @media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>