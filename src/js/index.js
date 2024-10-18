const buttons = document.querySelectorAll('.buttons button');
const form = document.querySelector('#form');
const card = document.querySelector('.card');
const thankYouPage = document.querySelector('.thank-you');
const userSelection = document.querySelector('#selection');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const hasSelectedOption = document.querySelector('.selected');
  const selectedOption = hasSelectedOption.textContent;
  if (!hasSelectedOption) {
    return;
  }
  card.classList.remove('active');
  thankYouPage.classList.add('active');
  userSelection.textContent = `You selected ${selectedOption} out of 5`;
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const botaoSelecionado = document.querySelector('.selected');

    if (botaoSelecionado) {
      removeSelected();
    }

    button.classList.add('selected');
  });
});

function removeSelected() {
  buttons.forEach((button) => {
    button.classList.remove('selected');
  });
}
