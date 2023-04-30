(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {

    constructor(
      public id: string,
      public type: HtmlType,
    ) {}

  }

  class InputAttributes {

    constructor(
      public value: string,
      public placeholder: string,
    ) {}

  }

  class InputEvents {

    constructor() {}

    setFocus() {};
    getValue() {};
    isActive() {};
    removeValue() {};

  }

  interface InputElementProps {
    id: string;
    type: HtmlType;
    value: string;
    placeholder: string;
  }

  class InputElement {
    public htmlElement     : HtmlElement;
    public inputAttributes : InputAttributes;
    public inputEvents     : InputEvents;

    constructor({
      id, type, // HtmlElement
      value, placeholder, // InputAttributes
    }: InputElementProps) {
      this.htmlElement     = new HtmlElement(id, type);
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents     = new InputEvents();
    }

  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({
    value: 'Fernando',
    placeholder: 'Enter first name',
    id: 'txtName',
    type: 'input'
  });

  console.log({ nameField });

  // nameField.inputEvents.getValue();

})();