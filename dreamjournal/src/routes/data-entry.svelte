<script>
  let dreamText = '';
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { navigate } from 'svelte-routing';

  async function submission() {
    console.log('Submitting dream:', dreamText);

    try {
      const response = await fetch('http://localhost:3000/api/dreams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Dream Entry',
          description: dreamText,
          date: new Date().toISOString().split('T')[0],
        }),
      });

      if (!response.ok) {
        console.error(`Dream submission failed with status: ${response.status}`);
        console.log('Server response:', await response.text());
        throw new Error('Dream submission failed');
      }

      // Read the response text directly, not attempting JSON parsing
      const responseText = await response.text();

      console.log('Dream submitted successfully:', responseText);
      navigate('/successful-submission');
    } catch (error) {
      console.error('Error submitting dream:', error.message);
    }
  }
</script>

<main>
  <Navbar />
  <h1>Create your dream entry</h1>
  <p>Note down your dream so that you may revisit it whenever you want</p>
  <div class="form-container">
    <textarea bind:value={dreamText} rows="10" cols="30" style="width: 35%;"></textarea>
    <button on:click={submission}>Submit Dream</button>
  </div>
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

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.5em;
    }
  
    textarea {
        padding: 8px;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1em;
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