import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'zsp2088dev-test',
  apiKey: process.env.API_KEY,
})