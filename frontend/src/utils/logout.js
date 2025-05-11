export const logout = (navigate) => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  
    // Redirect to login page
    navigate("/");
  };