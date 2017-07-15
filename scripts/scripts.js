function imageModal(modalID, imageID, modalImage) {
    modalID.style.display = "block";
    modalImage.src = imageID.src;
}
// Get the modal
var modal = document.getElementById('modal-ch4-ex');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('thumb-ch4-ex');
var modalImg = document.getElementById("ch4-ex-albion-image");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

