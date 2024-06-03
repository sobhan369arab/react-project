import toast from 'react-hot-toast';


function Success(text) { () => toast.success(text); console.log(toast.success(text)); }
function Error(text) { () => toast.error(text); console.log(toast.error(text)); }

export {Success,Error};

