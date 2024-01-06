import Swal from "sweetalert2";

export const Toast = (() => {
  const toast = Swal.mixin({
    toast: true,
    timer: 3000,
    position: "top",
    showConfirmButton: false,
    width: "fit-content",
    color: "white",
    background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
  });

  return {
    success: (message: string) => toast.fire({ text: message, icon: "success" }),
    error: (message: string) => toast.fire({ text: message, icon: "error" }),
  };
})();
