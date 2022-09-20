<script lang="ts">
  /**
  import * as walletfull from "monero-javascript/dist/monero_wallet_full.js";
  import * as walletkeys from "monero-javascript/dist/monero_wallet_keys.js";
  import * as monerojs from "$lib/monero";
  import * as monerojs from "monero-javascript";

  import { createRequire } from "node:module";
  const require = createRequire(import.meta.url);
  const monerojs = require("monero-javascript");
  **/

  import monerojs from "monero-javascript";

  /**
   */
</script>

<h1>Simple wasm: Monero Import</h1>
{#if typeof monerojs.LibraryUtils.loadKeysModule == "function"}
  <p>monerojs loaded...</p>
{:else}
  <p>Unresolved</p>
{/if}
