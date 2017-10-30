console.log('getMsg.js running');

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  console.log('Got event data:', event.data);
  //var messageArea = document.getElementById('msgData');
  //messageArea.innerHTML = event.data;
  // Now call sendMessage() to send a message to Unity using this data.
  x = event.data;
  gameInstance.SendMessage ('CarTraining', 'SendCommand', x);
  gameInstance.SendMessage ('UISystem', 'PortText', x);
  
}
