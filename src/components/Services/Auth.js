import Swal from 'sweetalert2';

const getUserdata = async () => {
    const response = await JSON.parse(localStorage.getItem("user_data"))
    return response;
}

const handleDelete = (selectedId, user_details, setUser_details) => {
    Swal.fire({
        icon: 'delete',
        title: 'Are you sure ?',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!'
    }).then((result) => {
        if (result.value) {
            const new_user_details = user_details.filter((pd) => {
                if (pd.id !== selectedId)
                    return pd;
            })
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'User data has been deleted.',
                showConfirmButton: false,
                timer: 1000,
            });
            console.log("In handle delete...", new_user_details);
            localStorage.setItem("user_data", JSON.stringify(new_user_details));

            setUser_details(new_user_details);
        }

    })
}

const handleAdd = (firstName, lastName, email, password, user_details, setUser_details) => {

    if (!firstName || !lastName || !email || !password) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true,
        });
      }

    user_details = JSON.parse(localStorage.getItem("user_data"));

    const id = user_details.length + 1;

    const user = {
        id,
        firstName,
        lastName,
        email,
        password,
    };


    user_details.push(user);
    localStorage.setItem("user_data", JSON.stringify(user_details));

    setUser_details(user_details);

}


export { handleDelete, handleAdd, getUserdata };