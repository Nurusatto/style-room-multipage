class Header {
  private rootElement: HTMLElement;
  private overlayElement: HTMLElement | null;
  private burgerButtonElement: HTMLButtonElement | null;

  private readonly selectors = {
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  } as const;

  private readonly stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  } as const;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;

    this.overlayElement = this.rootElement.querySelector<HTMLElement>(
      this.selectors.overlay
    );

    this.burgerButtonElement =
      this.rootElement.querySelector<HTMLButtonElement>(
        this.selectors.burgerButton
      );

    this.bindEvents();
  }

  private onBurgerButtonClick = () => {
    if (!this.burgerButtonElement || !this.overlayElement) return;

    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  private bindEvents() {
    this.burgerButtonElement?.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

export default Header;
