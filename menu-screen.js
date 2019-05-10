// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.element = document.querySelector('#choices');
    //this.btn_event=this.btn_event.bind(this);

    console.log(this);
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }


  createMenuItems(menu, flashcard, result) {
    for(let item=0; item<FLASHCARD_DECKS.length ; item++)
    {

      const title = document.createElement('div');
      title.textContent = FLASHCARD_DECKS[item].title;
      title.classList.add('cursor_pointer');
      title.addEventListener('click', function btn_event(){
          menu.hide();
          flashcard.show();
          console.log("btn="+btn_event);
      });

      this.element.appendChild(title);

      console.log("flash="+flashcard);
    }
  }

/*  btn_event() {
    this.hide();
  }*/

}
