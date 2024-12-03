import { productsData } from "./data.js";

const url = new URLSearchParams(window.location.search);

const id = url.get("id");

const product = productsData.find((p) => p.id == id);