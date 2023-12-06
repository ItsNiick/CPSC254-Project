<script>
    import { navigate } from 'svelte-routing';
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
  
    export let dream;
  
    async function updateDream() {
        try {
            if (!dream) {
                console.error('Dream is undefined');
                return;
            }

            const response = await fetch(`http://localhost:3000/api/dreams/${dream.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: dream.description,
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to update dream with status: ${response.status}`);
            }

            navigate('/dream-list');
        } catch (error) {
            console.error('Error updating dream:', error.message);
        }
    }
</script>


<main>
    <Navbar />
    <h1>Edit Dream</h1>
    <p>Edit your dream description and click Save to update.</p>
    <form on:submit|preventDefault={updateDream}>
        <label for="description">Description</label>
        <textarea id="description" value={dream.description} on:input={(e) => dream.description = e.target.value}></textarea>
        <button type="submit">Save</button>
    </form>
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

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
