function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if(username === "Entri Elevate" && password === "admin123") {
                window.location.href = "home.html";
            } else {
                alert("Invalid username/password");
            }
        }
        
        function forgotPassword() {
            const email = prompt("Enter your email");
            if(email) {
                alert("Verification code sent to your email");
            }
        }

        function logout() {
            if(confirm("Are you sure you want to logout?")) {
                window.location.href = "login.html";
            }
        }