function submitPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const postContainer = document.getElementById('postContainer');

    if (!title || !content) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Tạo bài viết mới
    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    // Thêm ảnh nếu có
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const postImage = document.createElement('img');
        postImage.src = e.target.result;
        post.appendChild(postImage);
      };
      reader.readAsDataURL(imageInput.files[0]);
    }

    // Thêm bài viết vào container
    postContainer.prepend(post);

    // Xóa nội dung sau khi đăng
    document.getElementById('postForm').reset();
  }