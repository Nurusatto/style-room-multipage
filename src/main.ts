//styles
import "@/styles/index.scss";
import "@/shared";

//blocks
import "@/block/header.scss";
import "@/block/burger-Button.scss";
import "@/block/hero.scss";
import "@/block/craft.scss";

//scripts
import Header from "./scripts/Header";

const headerRoot = document.querySelector<HTMLElement>("[data-js-header]");
if (headerRoot) {
  new Header(headerRoot);
}
