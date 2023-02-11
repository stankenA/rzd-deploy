// Swap input values
export function swapInputValues(firstInput, secondInput) {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;

  firstInput.value = secondValue;
  secondInput.value = firstValue;
}
