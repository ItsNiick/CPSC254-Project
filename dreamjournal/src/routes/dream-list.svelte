<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import DeleteButton from '../components/DeleteButton.svelte';
    import UpdateButton from '../components/UpdateButton.svelte';
    import HomeButton from "../components/HomeButton.svelte";
    import { onMount } from 'svelte';
  
    let dreams = [];
    onMount(async () => {
      try {
        // fetches data from the API endpoint http://localhost:3000/api/dreams
        const response = await fetch('http://localhost:3000/api/dreams');
        // if response is not ok, create new error
        if (!response.ok) {
          throw new Error(`Failed to fetch dreams with status: ${response.status}`);
        }
        // if response is ok, parse the content and assign it to dreams
        dreams = await response.json();
      } catch (error) {
        // if there was an error, log the error message to the console
        console.error('Error fetching dreams:', error.message);
      }
    });
  
    async function deleteDream(id) {
      try {
        // delete the dream by sending a DELETE request to the server
        const response = await fetch(`http://localhost:3000/api/dreams/${id}`, {
          method: 'DELETE',
        });
        // if the response is not ok, create new error
        if (!response.ok) {
          throw new Error(`Failed to delete dream with status: ${response.status}`);
        }
  
        // if successful, removes the deleted dream from the dreams array
        dreams = dreams.filter(dream => dream.id !== id);
      } catch (error) {
        // if there was an error, log the error message to the console
        console.error('Error deleting dream:', error.message);
      }
    }
</script>
  
  <main>
    <Navbar />
    <h1>Here is your dream list.</h1>
    <p>You can explore your past dreams, update them, or even delete them.</p>
    <HomeButton>Return to the homepage</HomeButton>
    <!--checks if dreams array has at least 1 entry-->
    {#if dreams.length > 0}
      <ul>
        {#each dreams as dream (dream.id)}
        <!--iterates over each dream in the dreams array-->
          <li>
            <p>{dream.title}</p>
            <p>{dream.description}</p>
            <p>{dream.date}</p>
            <DeleteButton onDelete={() => deleteDream(dream.id)}>Delete this dream</DeleteButton>
            <UpdateButton dreamId={dream.id}>Update this dream</UpdateButton>
          </li>
        {/each}
      </ul>
    {:else}
    <!--if dreams array <= 0, display this default message-->
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
  
    ul {
      list-style: none;
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