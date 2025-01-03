import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs = [
    {  id: 1,  title: 'First Blog Post',  content: 'This is the first blog post content. It’s a great post.',  date: new Date(),
      comments: [
        { id: 1, text: 'Great post!' },
      ],
      likes: 10,
      liked: false
    },
    {  id: 2,  title: 'Second Blog Post', content: 'This is the second blog post content, more interesting!',  date: new Date(),
      comments: [
        { id: 3, text: 'Very informative.' }
      ],
      likes: 5,
      liked: false
    }
  ];

  newCommentText: string = '';

  // Add a new comment to the selected blog
  addComment(blogId: number) {
    if (this.newCommentText.trim()) {
      const comment = {
        id: new Date().getTime(), // generate a unique ID based on timestamp
        text: this.newCommentText
      };
      const blog = this.blogs.find(b => b.id === blogId);
      blog?.comments.push(comment);
      this.newCommentText = ''; // reset the comment input field
    }
  }

  // Delete a comment
  deleteComment(commentId: number) {
    this.blogs.forEach(blog => {
      blog.comments = blog.comments.filter(comment => comment.id !== commentId);
    });
  }

  // Toggle like/unlike for the blog
  toggleLike(blog: any) {
    blog.liked = !blog.liked;
    if (blog.liked) {
      blog.likes++;
    } else {
      blog.likes--;
    }
  }

  // Delete a blog
  deleteBlog(blogId: number) {
    this.blogs = this.blogs.filter(blog => blog.id !== blogId);
  }

  // Edit a blog (placeholder logic)
  editBlog(blogId: number) {
    const blog = this.blogs.find(b => b.id === blogId);
    if (blog) {
      const updatedContent = prompt('Edit the blog content:', blog.content);
      if (updatedContent) {
        blog.content = updatedContent;
      }
    }
  }
}
