//styles
import "@/styles/index.scss";
import "@/UI";

//blocks
import "@/block/header.scss";
import "@/block/burger-Button.scss";
import Header from "./scripts/Header";

const headerRoot = document.querySelector<HTMLElement>("[data-js-header]");
if (headerRoot) {
  new Header(headerRoot);
}
