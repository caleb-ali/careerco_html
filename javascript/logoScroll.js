// document.addEventListener('DOMContentLoaded', function () {
//     var logos = ['images/logo1.svg', 'path/to/logo2.svg', 'path/to/logo3.svg']; // Replace with actual paths
//     var logoContainer = document.getElementById('logoContainer');

//     logos.forEach(function(logo, index) {
//         var img = document.createElement('img');
//         img.src = logo;
//         img.alt = 'Logo ' + index;
//         logoContainer.appendChild(img);

//         var duplicateImg = img.cloneNode(true);
//         duplicateImg.alt = 'Logo ' + index + ' duplicate';
//         logoContainer.appendChild(duplicateImg);
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var logos = ['path/to/logo1.svg', 'path/to/logo2.svg', 'path/to/logo3.svg']; // Replace with actual paths
    var logoContainer = document.getElementById('logoContainer');

    logos.forEach(function (logo, index) {
        var img = document.createElement('img');
        img.src = logo;
        img.alt = 'Logo ' + index;
        logoContainer.appendChild(img);

        var duplicateImg = img.cloneNode(true);
        duplicateImg.alt = 'Logo ' + index + ' duplicate';
        logoContainer.appendChild(duplicateImg);
    });
});