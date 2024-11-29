function previewFile() {
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const file = fileInput.files[0];

    previewContainer.innerHTML = '';

    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const fileType = file.type.split('/')[0];

        if (fileType === 'image') {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.classList.add('preview-image');
          previewContainer.appendChild(img);
        }
        else if (fileType === 'video') {
          const video = document.createElement('video');
          video.src = e.target.result;
          video.classList.add('preview-video');
          video.controls = true;
          previewContainer.appendChild(video);
        }
      };

      reader.readAsDataURL(file);
    }
  }

  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Tin đã được tải lên thành công!');

    document.getElementById('uploadForm').reset();
    document.getElementById('previewContainer').innerHTML = '';
  });