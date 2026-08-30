/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Currency - Currency to use for the price */
  "currency": "USD" | "EUR" | "GBP" | "JPY" | "BRL",
  /** Style - Style to display on the system menubar */
  "style": "price" | "down24h-price-up24h" | "down24hPercent-price-up24hPercent",
  /** Source - Preferred source for fetching the price. If it's unavailable, the extension automatically falls back to the other sources. */
  "source": "Binance" | "CoinGecko" | "OKX" | "Coinbase" | "Kraken" | "CryptoCompare",
  /** Coins - Coins to enable, default is BTC | ETH BNB SOL XRP */
  "coins": string,
  /** CryptoCompare API Key - Optional. A free CryptoCompare (CCData) API key. Only needed to use CryptoCompare as a source — its public API now requires a key. */
  "cryptoCompareApiKey"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}

