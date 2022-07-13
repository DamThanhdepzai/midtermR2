// function Confirm(id) {
//     confirm("Chắc không?");
//     return window.location.route('cars.edit',$car->id);
//     console.log("Bạn đã bấm vào xóa");
// }
var deleteLinks = document.querySelectorAll('.edit');

for (var i = 0; i < deleteLinks.length; i++) {
    deleteLinks[i].addEventListener('click', function(event) {
        event.preventDefault();

        var choice = confirm(this.getAttribute('data-confirm'));

        if (choice) {
            window.location.href = this.getAttribute('href');
        }
    });
}