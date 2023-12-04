<script>
    let dreamText = '';
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";

    function submition() {
        console.log("Your dream has been submitted:", dreamText);
    }
  </script>

  
  <main>
    <Navbar />
    <h1>Data Entry Page</h1>
    <p>Note down your dream:</p>
    <div class="form-container">
        <textarea bind:value={dreamText} rows="10" cols="30" style="width: 35%;"></textarea>
        <button on:click={submition}>Submit Dream</button>
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
        width: 35%;
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