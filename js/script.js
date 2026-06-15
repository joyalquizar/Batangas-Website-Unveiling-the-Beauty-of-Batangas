document.addEventListener('DOMContentLoaded', function() {
  // Declare all necessary DOM elements
  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm = document.querySelector('.login-form-container');
  let loginForms = document.querySelector('login-Form');
  let loginClick = document.getElementById('login-click');
  let registerClick =  document.getElementById('register-click');
  let registerForm = document.querySelector('.register-form-container');
  let formClose = document.querySelector('#form-close');
  let registerClose = document.querySelector('#register-close');
  let menu = document.querySelector('#menu-bar');
  let navbar = document.querySelector('.navbar');
  let videoBtn = document.querySelectorAll('.vid-btn');
  



  if (registerClick) {
    registerClick.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginForm && registerForm) {
            loginForm.style.display = 'none'; // Hide login form
            registerForm.style.display = 'block'; // Show register form
        }
    });
}

if (loginClick) {
    loginClick.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginForm && registerForm) {
            loginForm.style.display = 'block'; // Show login form
            registerForm.style.display = 'none'; // Hide register form
        }
    });


}
if (registerClose) {
    registerClose.addEventListener('click', function() {
        if (registerForm) registerForm.style.display = 'none'; // Hide register form
    });
}

  // Scroll event to remove active classes
  window.onscroll = () => {
      searchBtn.classList.remove('fa-times');
      searchBar.classList.remove('active');
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
      loginForms.classList.remove('active');
  };
  
  // Toggle Navbar menu
  menu.addEventListener('click', () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  });

  // Toggle Search Bar visibility
  searchBtn.addEventListener('click', () => {
      searchBtn.classList.toggle('fa-times');
      searchBar.classList.toggle('active');
  });

  // Toggle Login Form visibility
  formBtn.addEventListener('click', () => {
      loginForm.classList.add('active');
  });
  formClose.addEventListener('click', () => {
      loginForm.classList.remove('active');
  });

  

  // Video Button Click Functionality
  videoBtn.forEach(btn => {
      btn.addEventListener('click', function() {
          document.querySelector('.controls .active').classList.remove('active');
          this.classList.add('active');
          let src = this.getAttribute('data-src');
          document.querySelector('#video-slider').src = src;
      });
  });

  // Swiper for Review Slider
  var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
      },
  });

  // Swiper for Brand Slider
  var swiper = new Swiper(".brand-slider", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      breakpoints: {
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
      },
    });

  
    // Show/Hide Password functionality
    document.getElementById("showpassword").addEventListener("change", function() {
        const passwordField = document.getElementById("password");
        passwordField.type = this.checked ? "text" : "password";
    });
    

    // login submit
    

    document.addEventListener('DOMContentLoaded', function() {
      const loginForm = document.getElementById('loginForm');  // Make sure the form has the ID 'loginForm'
      const emailField = document.getElementById('email');  // Make sure your email input has the ID 'email'
      const passwordField = document.getElementById('password');  // Make sure your password input has the ID 'password'
      const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');  // The checkbox to toggle password visibility
      
      if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = emailField.value.trim();
            const password = passwordField.value.trim();

            if (!email || !password) {
                alert('Email and password are required!');
                return;
            }

            fetch('login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Login successful!');
                        window.location.href = 'admin.html'; // Redirect to admin dashboard
                    } else {
                        alert(data.message || 'Invalid email or password');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again.');
                });
        });
    }

  
      // Show Password for Login
      if (showPasswordCheckbox) {
          showPasswordCheckbox.addEventListener('change', function () {
              // Toggle password visibility based on checkbox
              passwordField.type = showPasswordCheckbox.checked ? 'text' : 'password';
          });
      }
  });
  


// Show Password for Register
const showRegPasswordCheckbox = document.getElementById("show-reg-password");
if (showRegPasswordCheckbox) {
  showRegPasswordCheckbox.addEventListener("change", function () {
    const regPasswordField = document.getElementById("reg-password");
    if (regPasswordField) {
      regPasswordField.type = this.checked ? "text" : "password";  // Toggle register password visibility
    }
  });
}






// Handle Menu Bar Click Event (Currently Empty)
const menuBar = document.getElementById("menu-bar");
if (menuBar) {
  menuBar.addEventListener("click", function () {
    // Code for the menu bar click event (you can implement it here)
  });
} else {
  console.error("menu-bar element not found.");
}
function newFunction() {
    console.error("Login form element not found.");
}

//login click js


//Register Click js cript

document.getElementById('registerForm').addEventListener('submit', function(event) {
  // Get values from the form
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Reset any previous error message
  errorMessage.textContent = '';

  // Check if the passwords match
  if (password !== confirmPassword) {
      event.preventDefault(); // Prevent form submission
      errorMessage.textContent = 'Passwords do not match!';
      errorMessage.style.color = 'red';
  }
});
// password match
document.addEventListener('DOMContentLoaded', function() {
  const regPassword = document.getElementById('reg-password');
  const confirmPassword = document.getElementById('confirm_password');
  const showRegPassword = document.getElementById('show-reg-password');

  if (showRegPassword && regPassword && confirmPassword) {
      showRegPassword.addEventListener('change', function() {
          const type = showRegPassword.checked ? 'text' : 'password';
          regPassword.type = type;
          confirmPassword.type = type;
      });
  } else {
      console.error("Required elements not found.");
  }
})
});

document.addEventListener('DOMContentLoaded', function() {
    const myElement = document.querySelector('.some-element');
    if (myElement) {
        window.addEventListener('scroll', function() {
            // Your scroll-related functionality
            myElement.classList.add('scrolled');
        });
    }
});

