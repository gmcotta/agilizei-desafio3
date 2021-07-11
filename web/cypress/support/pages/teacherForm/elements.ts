const ELEMENTS = {
  inputName: 'input#name',
  inputAvatar: 'input#avatar',
  inputWhatsapp: 'input#whatsapp',
  textareaBio: 'textarea#bio',
  selectSubject: 'select#subject',
  inputCost: 'input#cost',
  buttonNewSchedule: 'button[type="button"]',
  buttonSubmit: 'footer>button',
  selectWeekdayWithIndex(index: number) {
    return `div.schedule-item.item-${index} > .select-block > select`;
  },
  inputFromWithIndex(index: number) {
    return `div.schedule-item.item-${index} > .input-block > input#from`;
  },
  inputToWithIndex(index: number) {
    return `div.schedule-item.item-${index} > .input-block > input#to`;
  },
};

export default ELEMENTS;
