setTimeout(() => {
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('loginBox').style.display = 'flex';
    }, 3000);

    function login() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      if (user === 'Usama' && pass === 'Usama@H4K3R') {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('mainButtons').style.display = 'flex';
      } else {
        alert('Invalid Credentials!');
      }
    }

    function sendMessage() {
      const message = encodeURIComponent('get price permanent number ban');
      window.open(`https://wa.me/923079970288?text=${message}`, '_blank');
    }

    function showDeveloper() {
      alert("Developer: Usama Ahmed\n\nUsama Ahmed is a brilliant, expert-level developer who created this hacker-style interface with cool animations. True pro!");
    }