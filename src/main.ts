//styles
import "@/styles/index.scss";
import "@/ui";

//blocks
import "@/block/header.scss";
import "@/block/burger-Button.scss";
import "@/block/hero.scss";
import "@/block/craft.scss";
import "@/block/navigating.scss";
import "@/block/style.scss";
import "@/block/testimonials.scss";
import "@/block/question.scss";
import "@/block/wardrobe.scss";
import "@/block/footer.scss";

//scripts
import Header from "@/scripts/Header";

const headerRoot = document.querySelector<HTMLElement>("[data-js-header]");
if (headerRoot) {
  new Header(headerRoot);
}
