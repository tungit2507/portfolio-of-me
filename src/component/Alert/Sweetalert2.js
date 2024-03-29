import Swal from "sweetalert2";

const SweetAlert2 = {
  warning: (message) => {
    Swal.fire('Warning!', message, 'warning');
  },
  success: (message) => {
    Swal.fire('Success!', message, 'success');
  },
  error: (message) => {
    Swal.fire('Error!', message, 'error');
  },
  info: (message) => {
    Swal.fire('Info!', message, 'info');
  },
  question: (message) => {
    Swal.fire('Question!', message, 'question');
  },
  confirm: (message, action) => {
    Swal.fire({
      title: 'Warning!',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        action();
      }
    });
  }
};

export default SweetAlert2;
