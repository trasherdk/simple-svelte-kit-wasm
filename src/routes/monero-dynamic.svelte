<script>
</script>

<h1>Simple wasm: Monero Dynamic</h1>
<p>
  {#await import("monero-javascript")}
    Loading...
  {:then}
    Done loading monero-javascript...
  {:catch error}
    Import failed!
    <span style="color: red">{error.message}</span>
  {/await}
</p>
