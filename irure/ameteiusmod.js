const inputText = document.getElementById('yourInputField').value;

if (inputText.trim() === '') {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  document.getElementById('yourInputField').value = formattedDate;
}
