function showMessage() {
  var message = document.getElementById('message');
  message.style.display = 'block';
  var button = document.querySelector('.container > button');
  button.style.display = 'none';
}

function toggleMoreInfo() {
  var moreInfo = document.getElementById('more-info');
  if (moreInfo.style.display === 'block') {
      moreInfo.style.display = 'none';
  } else {
      moreInfo.style.display = 'block';
  }
}