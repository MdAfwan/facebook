function chooseOption(option) {
  const postContent = document.getElementById('postContent');

  switch (option) {
    case 'live-video':
      postContent.value += "📹 ";
      break;
    case 'photo-video':
      postContent.value += "📷 ";
      break;
    case 'feelings-activity':
      postContent.value += "😊 ";
      break;
    default:
      break;
  }
}

function post() {
  const postContent = document.getElementById('postContent').value;

  if (postContent.trim() !== '') {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.textContent = postContent;

    document.getElementById('posts').appendChild(postElement);

    // Clear the textarea after posting
    document.getElementById('postContent').value = '';
  }
}
